// Design a "Water Bottle" data structure with functionality.  Give it functionality for being filled up and poured out.  Provide a check that returns how much water is in the water bottle.

let waterBottle = {
  waterAmount: {
    currentAmount : 0,
    minAmount : 0,
    maxAmount : 100
  },

  // Note using an arrow function here makes "this" default to the "this" of the paraent/enclosing lexical content
  checkAmount : function() {
      console.log(this.waterAmount.currentAmount)
    },
  fill : function(amount) {
    this.waterAmount.currentAmount += amount
    this.checkAmount()
  },
  empty : function(amount) {
    this.waterAmount.currentAmount -= amount
    this.checkAmount()
  }
}

waterBottle.fill(100)
waterBottle.empty(50)

// Potential further questions:
// Is there a preferred data type for the water?
// Should the amount of water have persistance?
// Should there be a volume constraint of the water bottle?
// What kind of catch should there be in case the amount added exceeds the capacity of the water bottle?
