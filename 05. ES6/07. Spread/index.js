// https://chatgpt.com/c/6882464d-1c78-8007-92c6-e8693436d28a
// https://chatgpt.com/c/688249cf-05fc-8007-a13c-f7a1c80b77f2

const arr = [1, 2, 3];
const copy = [...arr]; // [1, 2, 3]


const nums = [1, 2, 3];
const newNums = [...nums, 4, ...[5, 6]];
console.log(newNums);  // [ 1, 2, 3, 4, 5, 6 ]


const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]

const arr1 = [1, 2, 3];
const result = [...arr1, ...'abc'];
console.log(result); // [1, 2, 3, 'a', 'b', 'c']


const nums2 = [1, 2, 2, 3];
const unique = [...new Set(nums2)]; // [1, 2, 3]



