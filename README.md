# @renodesu/lint

Opinionated eslint@9 + prettier config.

## Usage

```
npm i https://github.com/renodesu/lint
```

Add eslint config to project `eslint.config.js` (or `.cjs`):

```javascript
import config from '@renodesu/lint/eslint'
export default [...config]
```

Add prettier config to project `.prettierrc.json`:

```json
"@renodesu/lint/prettier"
```

## Testing

Use `src/*` to manually try out rules.

## Notes

- `tsconfig.json` is here because of [Linting with Type Information](https://typescript-eslint.io/docs/linting/type-linting/)
