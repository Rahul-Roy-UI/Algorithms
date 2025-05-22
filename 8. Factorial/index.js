// ! factorial ?
// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7707524#overview
// https://en.wikipedia.org/wiki/Factorial

function factorial(num) {
    if (num === 0 || num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

factorial(4);
