//fizzBuzz delta

/**
input: [1,2,3,4,5], 0, 3
out: [fizz, buzz]

input: [5, 7, 9, 15], 0, 5
out: [buzz, fizz, fizzBuzz]
*/

function fizzBuzzDelta (arr, spliceStart, spliceEnd) {
  let fbdOutput = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 15 === 0) {
      fbdOutput.push("fizzbuzz");
    } else if (arr[i] % 3 === 0) {
      fbdOutput.push("fizz");
    } else if (arr[i] % 5 === 0) {
      fbdOutput.push("buzz");
    }
  }
  
  return fbdOutput.splice(spliceStart, spliceEnd); // O(n + log n)
}

// And here is Ean's functional solution (whereas mine is more imperative, I beleive?)

let fizzBuzzDelta = (inputArray, subStart, subEnd) => {
    return inputArray.map((elm) => {
        let val = "";
        if (elm % 3 === 0){
            val += "fizz";
        }

        if (elm % 5 === 0){
            val += "Buzz";
        }

        return val;
    })
    .filter((elm) => {
        switch (elm){
            default:
                return false;
            break;
            
            case "fizz":
            case "Buzz":
            case "fizzBuzz":
                return true;
            break;
        }
    })
    .splice(subStart, subEnd);
}
