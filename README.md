# Boilerplate for Front End Typescript projects

This is a boilerplate for front end projects which utilises the following technologies:

 - [NextJS](https://nextjs.org/)  - A web application framework built on React.
 - [Typescript](https://www.typescriptlang.org/) - A strict syntactical superset of JavaScript, and adds optional static typing to the language.
 - [ESLint](https://eslint.org/) - JavaScript linter, used to analyze and fix code automatically.
 - [Prettier](https://prettier.io/) - An opinionated code formatter. There are IDE plugins for all the major IDEs which will auto format your code based off your config on save.
 
## Internationalization

Internationalization is supported with the use of [Next i18next](https://github.com/isaachinman/next-i18next) which is a NextJS plugin which uses [i18next](https://www.i18next.com/) under the hood.

By default, the supported languages are English and French, with English being the default. To change or extend these defaults, update the `NextI18Next` initialization in `i18n.js`.

### Translating content

Translating content occurs in `.json` files, organized in the following manner:

```
.
└── public
    └── static
        └── locales
            ├── en
            |   └── common.json
            └── fr
                └── common.json
```

Each `.json` file in the individual locales folders represents a different namespace. To access terms from a given namespace, prefix the term key with the namespace plus a `:`.

Here's an example of how to access tranlsated terms/content.

```javascript
import { useTranslation } from "../utils/i18n";

const { t } = useTranslation();

const term = t('common:site-title');
```

## Components

Some default components have been added for convenience purposes, with the intention of growing them as needed. They can be adjusted as required.

Checkout the `/components` page for the various components and example usages.

## Accessibility

This boilerplate is built with accessibility in mind. Every page has been run through the Chrome development tools Lighthouse accessibility audit and currently all pass with scores of 100 percent.

As default functionality is added, we will strive to keep these scores at 100 percent. 

## ESLint
ESLint is set to run when run the `npm run dev` command. This will throw errors/warning if any of the specified rules fail.

The ESLint rules are specified in the `.eslintrc.js` file under the `rules` section, where additional rules from the defaults and extended libraries can be added.

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
