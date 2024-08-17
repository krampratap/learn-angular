"use strict";
//Functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractNumber = (a, b) => a - b;
const res = addTwoNumbers(2, 3);
const res1 = subtractNumber(2, 3);
console.log(res);
console.log(res1);
function addAllNumbers(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    console.log(total);
}
const nums = [1, 2, 34];
addAllNumbers(nums);
