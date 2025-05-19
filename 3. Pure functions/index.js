// ! What is pure functions ?
// * Nisha Singla ==> https://www.youtube.com/watch?v=gHpEpw5nEGs&list=PLC8OkhrVTHNFITtT_TzfBbn8SohEU8Cpa&index=4&ab_channel=NishaSingla
// * Read ==> https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/

// Predictable && Readble && Resuable && Testable
function pure(x, y) {
    return x + y;
}

console.log(pure(10, 20));
console.log(pure(10, 20));
console.log(pure(10, 20));
console.log(pure(10, 20));