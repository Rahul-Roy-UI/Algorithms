function maxConsecutiveOnes(arr) {

    var currcount = 0;
    var maxcount = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currcount++;
        } else {
            maxcount = Math.max(currcount, maxcount);
            currcount = 0;
        }
    }

    return Math.max(currcount, maxcount)
};


maxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 1]);

// ! maxConsecutiveOnes([1,1,0,0,1,1,1,1]) // returns 4 ✅

// ! 📈 Time & Space Complexity:
// * Time: O(n) – one pass through the array.

// * Space: O(1) – constant space.
