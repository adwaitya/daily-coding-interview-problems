function MovesZero(nums) {

    let insertPosition = 0;

    for (let i = 0; i <nums.length; i ++) {
        if (nums[i] !== 0) {
            nums[insertPosition] = nums[i];
            insertPosition++;
        }
    }
    while(insertPosition < nums.length) {
       
        nums[insertPosition++] = 0;
    }
}

MovesZero([ 0, 1, 0, 3, 12 ])