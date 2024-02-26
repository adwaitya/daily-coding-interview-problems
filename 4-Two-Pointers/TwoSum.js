
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
function TwoSum(nums, target) {
    if (nums.length === 0 || nums.length ===1) {
        return nums;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const current = nums[left] + nums[right];
        if (current < target) {
            left ++;
        }
        else if (current > target) {
            right --;
        }
        else {
            return [left, right];
        }
    }
    return [-1, -1];
}

console.log(TwoSum([2,7,11,15], 17));