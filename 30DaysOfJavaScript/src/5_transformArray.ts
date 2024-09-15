// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//   return arr.map((n, i) => fn(n, i))
// };

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i))
  }
  return newArr
};



// console.log(`The output is: ${map([1, 2, 3], function plusone(n: number) { return n + 1; })}`)
console.log(`The output is: ${map([1, 2, 3], function constant(n, i) { return 42; })}`)
