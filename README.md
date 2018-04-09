# array-move-faster

Pure function for moving an item in an array from an index to an index. Returnns a copy. Significantly fster than the common double splice implemention.

## Usage

```javascript
const array = ['a','b','c','d','e','f'];
const result = move(array, 4, 2);
// result === ['a','b','e','c','d','f']
```
