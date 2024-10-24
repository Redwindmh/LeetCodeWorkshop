// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): any {

  return {
    toBe: (val2: any) => {
      if (val === val2) {
        return true
      } else {
        throw new Error("Not Equal")
      }
    },
    notToBe: (val2: any) => {
      if (val !== val2) {
        return true
      } else {
        throw new Error("Equal")
      }
    }
  }
};

expect(5)
expect(3).toBe(5)
