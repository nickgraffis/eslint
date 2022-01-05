Usage

## Install

```bash
npm install @nickgraffis/eslint
```

## Config .eslintrc
```json
{
  "extends": [
    "@nickgraffis/eslint"
  ]
}
```

## Config VSCode auto fix

Create .vscode/settings.json

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```