# @hwycdfatm/is-odd

> Returns true if a number is odd, false if even, null if not implemented yet.

⚠️ This is a "work in progress" package that implements odd number checking one number at a time. Currently only supports limited cases. More updates coming soon! 😄

## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install @hwycdfatm/is-odd
```

## Usage

```js
const isOdd = require('@hwycdfatm/is-odd');

console.log(isOdd(1));  // => true (implemented!)
console.log(isOdd(2));  // => false (implemented!)
console.log(isOdd(3));  // => null (not implemented yet)
console.log(isOdd(5));  // => null (not implemented yet)
```

## Current Status

**Version 0.0.2** - Only the following cases are implemented:

✅ `isOdd(1)` → `true`  
✅ `isOdd(2)` → `false`  
❌ All other numbers → `null` (not implemented yet)

This package will be updated regularly with more number support. Stay tuned!

## API

### isOdd(number)

Checks if the given number is odd.

**Params**

* `number` **{Number}**: The number to check

**Returns**

* **{Boolean|null}**: 
  - Returns `true` if the number is odd (when implemented)
  - Returns `false` if the number is even (when implemented)
  - Returns `null` if not implemented yet
  - Throws `TypeError` if input is not a finite number

**Example**

```js
const isOdd = require('@hwycdfatm/is-odd');

console.log(isOdd(1));        // => true
console.log(isOdd(3));        // => null
console.log(isOdd(NaN));      // => throws TypeError
console.log(isOdd(Infinity)); // => throws TypeError
```

## TypeScript

This package includes TypeScript definitions.

```typescript
import isOdd = require('@hwycdfatm/is-odd');

const result = isOdd(1);  // true
const result2 = isOdd(3); // null
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Author

**hwycdfatm**

### License

Copyright © 2026, [hwycdfatm].
Released under the [MIT License](LICENSE).
