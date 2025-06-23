// ! isPalindrome ?
// https://www.w3schools.com/jsref/jsref_indexof.asp ==> indexOf() is an ECMAScript1 (JavaScript 1997) feature
// * The indexOf() method returns -1 if the value is not found.
// * The indexOf() method returns the position of the first occurrence of a value in a string.
// * The indexOf() method is case sensitive.

// https://www.w3schools.com/jsref/jsref_reverse.asp ==> JavaScript Array reverse() is an ECMAScript1 (JavaScript 1997) feature.
// * The reverse() method reverses the order of the elements in an array.
// * The reverse() method overwrites the original array.

// https://www.w3schools.com/jsref/jsref_split.asp ==> split, is an ECMAScript1 (JavaScript 1997) feature.
// https://www.w3schools.com/jsref/jsref_foreach.asp ==> forEach
// https://www.w3schools.com/jsref/jsref_push.asp ==> push
// https://www.w3schools.com/jsref/jsref_tolowercase.asp ==> JavaScript String toLowerCase()
// https://www.w3schools.com/jsref/jsref_trim_string.asp ==> JavaScript String trim() ==> is an ECMAScript5 (ES5) feature.
// https://www.w3schools.com/js/js_arrow_function.asp ==> JavaScript Arrow Function ==> Arrow functions were introduced in ES6.

function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    charactersArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
}

console.log(isPalindrome("Madam I'm Adam"));
