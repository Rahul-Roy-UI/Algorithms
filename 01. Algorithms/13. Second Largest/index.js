function secondLargestNumbers(arr) {
    if (arr.length < 2) return null;

    var largestNum = -Infinity;
    var secondLargest = -Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            secondLargest = largestNum;
            largestNum = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largestNum) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// ! Test Cases:
// secondLargestNumbers([3,1,10,99])        // ✅ 10
// secondLargestNumbers([5,5,5])            // ✅ -Infinity (consider enhancing)
// secondLargestNumbers([99])               // ✅ null
// secondLargestNumbers([-5, -1, -10])      // ✅ -5
// secondLargestNumbers([100, 50, 100])     // ✅ 50