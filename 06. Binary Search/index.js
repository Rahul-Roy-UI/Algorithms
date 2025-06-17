// ! Binary Search
// https://www.w3schools.com/jsref/jsref_splice.asp ==> JavaScript Array splice()
// https://www.w3schools.com/jsref/jsref_floor.asp ==> JavaScript Math.floor(), Math.floor() rounds a number DOWN to the nearest integer
// * https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/ ==> slice vs splice

function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);