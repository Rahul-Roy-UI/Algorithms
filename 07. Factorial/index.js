// ! factorial ?
// https://en.wikipedia.org/wiki/Factorial

// * https://www.w3schools.com/js/js_comparisons.asp ==> Logical Operators, The || returns true if one or both expressions are true, otherwise it returns false.

function factorial(num) {

    // Base case
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

factorial(4);

// ! using Conditional (Ternary) Operator
/* 
    function Factorial(num) {
        return num === 0 || num === 1 ? 1 : num * Factorial(num-1)
    }

    Factorial(5);
*/
