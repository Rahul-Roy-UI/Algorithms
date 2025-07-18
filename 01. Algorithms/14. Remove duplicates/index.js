// ! This approach is O(n²) 
const items1 = ['b', 'b', 'a', 'a'];
const items2 = ['e', 'b', 'c', 'd'];

const items = [...items1, ...items2].sort();
const uniqueItems = items.filter((item, index) => {
    return items.indexOf(item) === index;
});
console.log(uniqueItems); // ['a', 'b', 'c', 'd', 'e']




// ! Set removes duplicates in O(n) time.
// ! sort() is O(n log n).
// ! Combined: O(n log n) total — much better for large arrays.
// ! https://www.w3schools.com/js/js_sets.asp

// Optimized Version (using Set)
// const items1 = ['b', 'b', 'a', 'a'];
// const items2 = ['e', 'b', 'c', 'd'];

// const merged = [...items1, ...items2];
// const uniqueSet = new Set(merged); // gives object Set(5) {'b', 'a', 'e', 'c', 'd'}
// const uniqueItemsSorted = [...uniqueSet].sort();

// console.log(uniqueItemsSorted); // ['a', 'b', 'c', 'd', 'e']



