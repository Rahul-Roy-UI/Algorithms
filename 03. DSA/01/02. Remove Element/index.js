function removeElement(nums, val) {

    if (nums.length === 0) return 0;

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        // * shift elemnts to left only if it's(nums[i]) not equal to val
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x = x + 1;
        }
    }

    return x;
}

removeElement([3, 2, 1, 5, 3, 4, 8, 3], 3); // ! output 5

// ! First 5 elements are the result (without 3)

// ! 🧪 Time and Space Complexity:
// * Time: O(n)

// * Space: O(1) — in-place