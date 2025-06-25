// ! Prime NUmbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example usage:
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false


/* 
    Explanation:
    
    - A prime number has no divisors other than 1 and itself.

    - You check if any number from 2 to √num divides num.

    - If any do, it's not prime.
*/