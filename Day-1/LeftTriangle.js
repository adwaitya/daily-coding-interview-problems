function LeftTriangle(num) {
    let rows = num;
    let string = '';

    for (let i = 1; i <= rows; i ++) {  
        for (let j = 0; j <i; j ++) {
            string += '*';
        }
        string += '\n';
    }
    console.log(string)
}

LeftTriangle(5);