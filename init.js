#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Setting up eslint config...');
const eslintrc = {
  "extends": [
    "@nickgraffis/eslint"
  ]
}

const eslintrcPath = path.join(process.cwd(), '.eslintrc.json');
fs.writeFileSync(eslintrcPath, JSON.stringify(eslintrc, null, 2));

const eslintignore = [
  "node_modules",
  "dist",
  "build",
  "coverage",
  "public",
]

const eslintignorePath = path.join(process.cwd(), '.eslintignore');
fs.writeFileSync(eslintignorePath, eslintignore.join('\n'));


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
}

const packageJson = require(path.join(process.cwd(), 'package.json'));
packageJson.scripts.lint = "eslint \"**/*.{vue,ts,js}\""
const version = packageJson.version;
packageJson.devDependencies = packageJson?.devDependencies || {};
packageJson.devDependencies['@nickgraffis/eslint'] = `^${version}`;

fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(packageJson, null, 2));
console.log('🎉 Installed ESLint configs. Run `npm install` to finish!');