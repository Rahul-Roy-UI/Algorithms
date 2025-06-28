// ! Reverse Integer
function reverseInteger(num) {
    let orignalNum = num;
    num = Math.abs(num);
    let rev = 0;

    while (num > 0) {
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2, 31); // ! or use 2 ** 31
    // will it be ever negative limit negeative ?
    if (rev < -limit || rev > limit) return 0; // ! if (rev > limit - 1 || rev < -limit) return 0; 
    return (orignalNum < 0) ? -rev : rev;
}

reverseInteger(-12367);

// ! Notes
// 2 ** 31 and Math.pow(2, 31) are functionally the same in JavaScript. Both evaluate to: 2147483648