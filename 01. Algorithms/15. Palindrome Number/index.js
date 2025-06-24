function palindromeNumber(num) {
    if (num < 0) return false;

    var numcopy = num;
    var rev = 0;

    while (num > 0) {
        var rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }

    return numcopy === rev;

}

palindromeNumber(12321);