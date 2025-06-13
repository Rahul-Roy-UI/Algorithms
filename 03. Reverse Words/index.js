// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7707448#overview
function reverseWords(string) {
    var wordsArr = string.split(' ');
    var reversedWorksArr = [];

    wordsArr.forEach(word => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWorksArr.push(reversedWord);
    });

    return reversedWorksArr.join(' ');
}

console.log(reverseWords('This is long name'));
