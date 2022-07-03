# Lumiverse ESLint config

## Usage

In the **project you want to include the config**, install the ESLint, this config and the plugins it requires.

```bash
npm i -D eslint @lumiverse/eslint-config @typescript-eslint/eslint-plugin eslint-plugin-import
```

Add it to project `.eslintrc.js`:

```javascript
module.exports = {
  extends: '@lumiverse/eslint-config',
}
```

## Testing

Use `test/test.ts` to manually try out rules.

## Notes
- `tsconfig.json` is here because of [Linting with Type Information
](https://typescript-eslint.io/docs/linting/type-linting/)
