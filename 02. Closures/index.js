// ! What are Closures ?
// * Akshay Saini ==> https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12&ab_channel=AkshaySaini

// * A function along with it's lexical scope together bundled froms a closure
// ! use debugger to learn more
// ! **Read** ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }

    return y;
}

var z = x();
console.log(z);
z();
