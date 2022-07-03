# @renodesu ESLint config

## Usage

In the **project you want to include the config**, install the ESLint, this config and the plugins it requires.

```bash
npm i -D git@github.com:renodesu/eslint-config.git eslint @typescript-eslint/eslint-plugin eslint-plugin-import
```

Add it to project `.eslintrc.js`:

```javascript
module.exports = {
  extends: '@renodesu/eslint-config',
}
```

## Testing

Use `test/test.ts` to manually try out rules.

## Notes
- `tsconfig.json` is here because of [Linting with Type Information
](https://typescript-eslint.io/docs/linting/type-linting/)
