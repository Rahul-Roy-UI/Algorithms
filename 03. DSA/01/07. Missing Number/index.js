var missingNumber = function (nums) {
    let n = nums.length;
    // ! Gauss summation to add numbers quicker
    let total_sum = (n * (n + 1)) / 2; // https://nkhilv.medium.com/using-gauss-summation-to-add-numbers-quicker-2ab61d01eff1
    let sum_of_array = 0;

    for (let num of nums) {
        sum_of_array += num;
    }

    return total_sum - sum_of_array;
};


// ! or using for loop

var missingNumber = function (nums) {
    var totalSum = (nums.length * (nums.length + 1) / 2);
    var sumOfArray = 0;

    for (var i = 0; i < nums.length; i++) {
        sumOfArray += nums[i];
    }

    return totalSum - sumOfArray;
};

missingNumber([3, 0, 1]); // ✅ Output: 2



// ! 📈 Time & Space Complexity:
// * Time: O(n)
// * Space: O(1) — just two variables used

//  Works correctly for shuffled arrays and non-sequential orders