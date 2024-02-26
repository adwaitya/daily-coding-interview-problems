// 26. Remove Duplicates from Sorted Array /https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
function  RemoveDuplicateFromArray(nums) {

    if (nums.length === 0 || nums.length ===1) {
        return nums;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j ++) {
        if (nums[j] !== nums[i]) {
            i ++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

RemoveDuplicateFromArray([1, 2,2, 5, 8,9 ])
