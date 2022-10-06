# @renodesu/eslint-config

## Usage

**_REQUIRES NODE 16 (OR EXPLICIT PEER DEPENDENCY INSTALL)_**

In the **project you want to include the config**, run:

```bash
npm i -D git@github.com:renodesu/eslint-config.git
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

- `tsconfig.json` is here because of [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting/)
