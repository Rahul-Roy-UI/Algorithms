var missingNumber = function (nums) {
    let n = nums.length;
    let total_sum = (n * (n + 1)) / 2;
    let sum_of_array = 0;

    for (let num of nums) {
        sum_of_array += num;
    }

    return total_sum - sum_of_array;
};


// ! 📈 Time & Space Complexity:
// * Time: O(n)
// * Space: O(1) — just two variables used

//  Works correctly for shuffled arrays and non-sequential orders