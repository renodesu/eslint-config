# @lumiverseltd/eslint-config

Opinionated eslint config.

## Usage

```
npm i @renodesu/eslint-config
```

Add it to project `.eslintrc.cjs`:

```javascript
module.exports = {
  extends: '@renodesu/eslint-config',
}
```

## Testing

Use `test/test.ts` to manually try out rules.

## Notes

- `tsconfig.json` is here because of [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting/)
