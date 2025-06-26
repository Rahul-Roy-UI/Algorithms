var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
};

let arr = ['H', 'e', 'l', 'l', 'o'];
reverseString(arr);
console.log(arr); // ['o', 'l', 'l', 'e', 'H']
