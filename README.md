# Boilerplate for Front End Typescript projects

## ESLint
ESLint is set to run when run the `npm run dev` command. This will throw errors/warning if any of the specified rules fail.

The ESLint rules are specified in the `./.eslintrc.js` file under the `rules` section, where additional rules from the defaults and extended libraries can be added.

For a list of rules that can be enabled, check out the [rules](https://eslint.org/docs/rules/) page in the eslint docs.

## VS Code Configuration
To add automatic ESLint fixing on save in VS Code:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "typescript", "autoFix": true },
    { "language": "typescriptreact", "autoFix": true }
  ]
}
```

If you've also set the `editor.formatOnSave` option to `true` in your `settings.json`, you'll need to add the following config to prevent running 2 formatting commands on save for JavaScript and TypeScript files:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  }
}
```
