function FullPyramid() {
    let num = 5;
    let str = '';
    for (let i = 1; i <=num; i ++) {
        for (j =0; j < num - i; j ++) {
            str += ' ';
        }

        for (k = 0; k <2 * i -1 ; k ++) {
            str += '*'
        }
        str += '\n';
    }
    // console.log(str)
    for (let i = 5; i >=0; i --) {
        for (j =0; j < num -i; j ++) {
            str += ' ';
        }

        for (k = 0; k <2 * i -1 ; k ++) {
            str += '*'
        }
        // console.log('ss', i)
        str += '\n';
    }
    console.log(str)
}

FullPyramid()