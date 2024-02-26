function RightTriangle(num) {

let str = '';
 
 for (let i = 1; i <=num; i ++) {
    console.log('i => ', i);
    for (let j = 0; j <num - i; j ++) {
        str += ' ';
    }
    for (let k = 0; k <i; k ++) {
        str += '*';
    }
    str += '\n';
 }
 console.log(str)
}

RightTriangle(5);