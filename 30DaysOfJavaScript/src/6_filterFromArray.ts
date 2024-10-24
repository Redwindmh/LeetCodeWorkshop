//Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {

};


function greaterThan10(n) { return n > 10; }
// arr = [0,10,20,30]
