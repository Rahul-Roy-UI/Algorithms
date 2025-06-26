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

    let limit = Math.pow(2, 31);
    if (rev < -limit || rev > limit) return 0;
    return (orignalNum < 0) ? -rev : rev;
}

reverseInteger(-12367);