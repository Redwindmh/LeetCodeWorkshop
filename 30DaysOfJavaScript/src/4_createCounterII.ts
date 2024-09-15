// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounterII(init: number): Counter {
  let initInt = init
  return {
    increment: () => {
      return ++init
    },
    decrement: () => {
      return --init
    },
    reset: () => {
      return init = initInt
    }
  }
};


const zounter = createCounterII(0)
console.log(zounter.increment()); // 1
console.log(zounter.increment()); // 2
console.log(zounter.decrement()); // 1
console.log(zounter.reset()); // 0
console.log(zounter.reset()); // 0

const bounter = createCounterII(5)
console.log(bounter.increment()); // 6
console.log(bounter.reset()); // 5
console.log(bounter.decrement()); // 4

