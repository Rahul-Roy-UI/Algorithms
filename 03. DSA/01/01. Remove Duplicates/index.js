// ! Remove Duplicates
function removeDuplicates(nums) {

    if (nums.length === 0) return 0;

    let x = 0;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }

    return x + 1;
}

removeDuplicates([0, 0, 0, 1, 2, 2, 3, 3, 4]);