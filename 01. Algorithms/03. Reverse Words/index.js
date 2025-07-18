// ! Reverse Words
// https://www.w3schools.com/jsref/jsref_foreach.asp ==> JavaScript Array forEach() is an ECMAScript5 (ES5) feature.
// * The forEach() method is not executed for empty elements.

function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];

    wordsArr.forEach(word => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWordsArr.push(reversedWord);
    });

    return reversedWordsArr.join(' ');
}

console.log(reverseWords('This is long name'));
