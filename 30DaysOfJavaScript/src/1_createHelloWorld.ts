// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld() {

  return function <T>(...args: T[]): string {
    console.log("Got it")
    return "Hello World"
  };
};

// const f = createHelloWorld()
// f([{}, null, 42])
// createHelloWorld([{}, null, 42])
