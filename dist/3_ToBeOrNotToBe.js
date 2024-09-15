"use strict";
function expect(val) {
    return {
        toBe: (val2) => {
            if (val === val2) {
                return true;
            }
            else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (val2) => {
            if (val !== val2) {
                return true;
            }
            else {
                throw new Error("Equal");
            }
        }
    };
}
;
expect(5);
expect(3).toBe(5);
