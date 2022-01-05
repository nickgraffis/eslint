const fs = require('fs');
const path = require('path');

module.exports = function (plugin, version) {
  const eslintrc = {
    "extends": [
      plugin
    ]
  }
  
  const eslintrcPath = path.join(process.cwd(), '.eslintrc.json');
  if (!fs.existsSync(eslintrcPath)) {
    fs.writeFileSync(eslintrcPath, JSON.stringify(eslintrc, null, 2));
  } else {
    const currentEslintrc = require(eslintrcPath);
    currentEslintrc.extends.push(plugin);
    fs.writeFileSync(eslintrcPath, JSON.stringify(currentEslintrc, null, 2));
  }
  
  const eslintignore = [
    "node_modules",
    "dist",
    "build",
    "public",
  ]
  
  const eslintignorePath = path.join(process.cwd(), '.eslintignore');
  if (!fs.existsSync(eslintignorePath)) {
    fs.writeFileSync(eslintignorePath, eslintignore.join("\n"));
  } else {
    const currentEslintignore = fs.readFileSync(eslintignorePath, 'utf8');
    const newEslintignore = currentEslintignore
    .split("\n")
    .concat(eslintignore)
    .filter(Boolean);
    fs.writeFileSync(eslintignorePath, [...new Set(newEslintignore)].join("\n"));
  }
  
  
  const vscodePath = path.join(process.cwd(), '.vscode');
  if (!fs.existsSync(vscodePath)) {
    fs.mkdirSync(vscodePath);
  }
  
  const settings = {
    "prettier.enable": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  
  const settingsPath = path.join(process.cwd(), '.vscode/settings.json');
  if (!fs.existsSync(settingsPath)) {
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
  } else {
    const currentSettings = require(settingsPath);
    currentSettings.prettier = settings?.prettier || {};
    currentSettings.prettier.enable = false;
    currentSettings.editor = currentSettings?.editor || {};
    currentSettings.editor.codeActionsOnSave = currentSettings.editor?.codeActionsOnSave || {};
    currentSettings.editor.codeActionsOnSave.source = currentSettings.editor.codeActionsOnSave?.source || {};
    currentSettings.editor.codeActionsOnSave.source.fixAll = currentSettings.editor.codeActionsOnSave.source?.fixAll || {};
    currentSettings.editor.codeActionsOnSave.source.fixAll.eslint = true;
    fs.writeFileSync(settingsPath, JSON.stringify(currentSettings, null, 2));
  }
  
  const packageJson = require(path.join(process.cwd(), 'package.json'));
  packageJson.scripts.lint = "eslint \"**/*.{vue,ts,js}\""
  packageJson.devDependencies = packageJson?.devDependencies || {};
  packageJson.devDependencies[plugin] = `^${version}`;
  
  fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(packageJson, null, 2));
  console.log('🎉 Installed ESLint configs. Run `npm install` to finish!');
}