// ! fizzBuzz
// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7722970#overview
// https://www.w3schools.com/js/js_arithmetic.asp ==> JavaScript Modulus 
// https://www.w3schools.com/js/js_if_else.asp ==> JavaScript if, else, and else if

function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}

fizzBuzz(20);