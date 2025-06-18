// ! Add up the Numbers from a Single Number
/* 
   * Instructions
   * ============
   ! Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
   ! For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

    Examples
    addUp(4) ➞ 10

    addUp(13) ➞ 91

    addUp(600) ➞ 180300
    Notes
    Expect any positive number between 1 and 1000.

*/

function addUp(num) {
    if (num === 1) return 1;
    else return num + addUp(num - 1)
}
addUp(5)

/* 
    ✔️ Works for small num

    ❌ Risk of stack overflow for large values (e.g., num = 1000)

*/

function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

/*
    ✔️ Works for all positive integers

    ✔️ No recursion

    ✔️ Beginner-friendly

    ✔️ Time Complexity: O(n)

    ✔️ Space Complexity: O(1)
*/

function addUp(num) {
    return (num * (num + 1)) / 2;
}

/*
    ✔️ Most efficient

    ✔️ No loop or recursion

    ⚡ O(1) time and space complexity
*/
