// completed 15/15 test cases
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
 * Complete the 'preprocessDate' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY dates as parameter.
 */

function preprocessDate(dates) {
    // Write your code here
    var parts = dates.split(" "); // tarihi boşluklardan ayırmak için - for seperate the date from spaces
    // tarihin gün, ay ve yıl bölümlerini ayırıyoruz - separate the day, month and year parts of the date
    var day = parts[0].replace("th", "").replace("st", "").replace("nd", "").replace("rd", "");
    var month = parts[1];
    var year = parts[2];
    
    // ayı sayısal değerine dönüştürüyoruz - for converting month to int
    var monthIndex = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(month);
    // Yılı 4 haneli hale getirdik - for converting year to 4digit int
    year = parseInt(year);

    // Günü 2 haneli hale getirdik - for converting day to 2 digit int
    day = parseInt(day);

    // tarihi yyyy-mm-dd formatına dönüştürüyoruz - for converting given date format
    var formattedDate = year + "-" + (monthIndex + 1).toString().padStart(2, "0") + "-" + day.toString().padStart(2, "0");
    
    // return
    return formattedDate;
}

function main() {
    const ws = fs.createWriteStream("/Users/furkanerdogan/Projects/Learning/Hackerrank/input000.txt");

    const datesCount = parseInt(readLine().trim(), 10);

    let dates = [];

    for (let i = 0; i < datesCount; i++) {
        const datesItem = readLine();
        dates.push(preprocessDate(datesItem));
    }

    const result = dates;

    ws.write(result.join('\n') + '\n');

    ws.end
}