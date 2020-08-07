'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let s=nums.sort(function(a, b){return a-b});
    let l= s.length - 1;
    while(s[l]===s[l-1]){
            l--;
    if (s[l] !== s[l-1]){
        return s[l-1];
    }
    }
    if (s[l] !== s[l-1]){
        return s[l-1];
    }
}
