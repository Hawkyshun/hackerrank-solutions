// completed 6/15 test cases
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'countOperations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function countOperations(p) {
    const n = p.length;
    const originalArr = Array.from({length: n}, (_, i) => i+1); // 1'den n'ye kadar bir dizi oluşturur - create an array from 1 to n
    let arr = Array.from({length: n}, (_, i) => originalArr[p[i]-1]); // ilk işlemi uygular - apply the first operation
    let count = 1;
    while (!arr.every((value, index) => value === originalArr[index])) { // dizi, orijinal diziye eşit olana kadar tekrarla - repeat until the array is the same as the original array
        arr = Array.from({length: n}, (_, i) => arr[p[i]-1]); // bir sonraki işlemi uygula - apply the next operation
        count++;
    }
    return count;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pCount = parseInt(readLine().trim(), 10);

    let p = [];

    for (let i = 0; i < pCount; i++) {
        const pItem = parseInt(readLine().trim(), 10);
        p.push(pItem);
    }

    const result = countOperations(p);

    ws.write(result + '\n');

    ws.end();
}
