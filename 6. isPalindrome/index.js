// ! isPalindrome ?
// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7707428#overview
// https://www.w3schools.com/jsref/jsref_indexof.asp ==> indexoF
// https://www.w3schools.com/jsref/jsref_split.asp ==> split
// https://www.w3schools.com/jsref/jsref_foreach.asp ==> forEach
// https://www.w3schools.com/jsref/jsref_push.asp ==> push

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
