# @nickgraffis/eslint

## Automated Set Up

```bash
npx @nickgraffis/eslint -basic
```
> :warning: **Remove node_modules**: For automated set up, remove the node_modules folder. I'm not sure why this is causing an issue...

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
npm install @nickgraffis/eslint-[basic|react|ts|vue]
```

## Config .eslintrc
```json
{
  "extends": [
    "@nickgraffis/eslint-[basic|react|ts|vue]"
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