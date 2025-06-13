// ! Binary Search
// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7707530#overview
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.w3schools.com/jsref/jsref_floor.asp
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