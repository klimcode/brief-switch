# Brief-Switch

1. The shortest syntax for functional "switch"-style comparison.
2. The fastest possible function designed to replace built-in "switch" statement.
3. A list of cases may be generated and mutated in the runtime.

## Installation

```bash
npm i -S brief-switch
```

## Example

```js
const switchB = require('brief-switch');
function fn1() { /*smth.*/ }
function fn2() { return 5; }

const cases = [
  'foo', 'bar',
  1, 2,
  3, fn2(),
  fn1, fn2,
  'default',
];
const result = switchB(3, cases); // 5
```

## Explanation

Every odd value in the "cases" array is a **test**. Every even value is a **result**. The last value is an analog of built-in "switch" statement's "**default**".
