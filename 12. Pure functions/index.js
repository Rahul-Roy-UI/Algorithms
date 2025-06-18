// ! What is pure functions ?
// * Read ==> https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/

// Predictable && Readable && Reusable && Testable
function pure(x, y) {
    return x + y;
}

console.log(pure(10, 20));
console.log(pure(10, 20));
console.log(pure(10, 20));
console.log(pure(10, 20));