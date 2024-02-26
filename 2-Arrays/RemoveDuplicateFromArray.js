function RemoveDuplicateFromArray (duplicateArr) {
    if (!duplicateArr.length) {
        return 'Empty Array';
    }
    const hashSet = {};
    const arr = [];
    for (let i = 0; i < duplicateArr.length; i ++) {
        const v = duplicateArr[i];
        if (hashSet[v] !== v) {
          hashSet[v] = v;  
        } 
    }
    for (let k in hashSet) {
        arr.push(hashSet[k]);
    }
    console.log('arr', arr);
}

RemoveDuplicateFromArray([2,5, 6,3,2])