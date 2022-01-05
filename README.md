# @nickgraffis/eslint

## Automated Set Up

```bash
npx @nickgraffis/eslint -basic
```

## Flag Options
* `-basic`: Basic ESLint configuration.
* `-react`: React ESLint configuration.
  * `react` and `ts` configs.
* `-ts`: TypeScript ESLint configuration.
  * `ts` and `basic` configs.
* `-vue`: Vue ESLint configuration.
  * `vue` and `ts` configs.

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