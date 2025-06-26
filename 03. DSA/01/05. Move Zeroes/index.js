function moveZeroes(arr) {

    var x = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i];
            x++;
        }
    }

    for (var i = x; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;

};

moveZeroes([1, 1, 0, 0, 3, 0, 0, 0, 12]);

// ! 📈 Time & Space Complexity:
// * Time Complexity: O(n) (single pass through the array twice)

// * Space Complexity: O(1) (in-place operation)

// ! 🔍 Edge Case Handling:
// ! ✅ Works for empty arrays

// * ✅ Works if all elements are zero

// * ✅ Works if there are no zeros

