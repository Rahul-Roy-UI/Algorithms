// ! Count Digits
// https://www.w3schools.com/jsref/jsref_abs.asp ==> JavaScript Math.abs()

function countDigit(num) {

    if (num === 0) return 1;

    num = Math.abs(num);

    let counter = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        counter++;
    }

    return counter;

}

countDigit(-10)