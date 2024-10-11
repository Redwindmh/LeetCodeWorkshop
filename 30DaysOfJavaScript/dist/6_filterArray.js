"use strict";
function filter(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        // if (fn(arr[i], i) == true) {
        if (fn(arr[i], i)) {
            console.log(arr[i]);
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
;
// console.log(filter([0, 10, 20, 30], function greaterThan10(n) { return n > 10; }))
// console.log(filter([1, 2, 3], function firstIndex(n, i) { return i === 0; }))
console.log(filter([-2, -1, 0, 1, 2], function plusOne(n) { return n + 1; }));