// Write a function that checks for collision detection that returns a boolean
//
// Inputs are a squared matrix, 0 is an empty space, 1 is the player, and 2 is the enemy. There will be one player element, and there can be any number of enemy elements.
//
// Collision: player is adacent to an enemy, either vertically or horizontally
// If the top row = [0,1,2], that is a collision, but [1,0,2] is not a collision.
// If
// [1, 0, 0],
// [2, 0, 0],
// [0, 0, 0]
//
// That would be a vertical collision.
//
// Itereate through the location matrix to find each value.
// Compare each value to those both in the same row as well as those in vertically adjacent locations on different rows.
// If value 1 (the player) is vertically or horizontally adjacent to value 2 (an enemy), the function will return true, if not, it will return false.


let collisionCheck = (locationMatrix) => {
  const player = 1
  const enemy = 2

  for (let i = 0; i < locationMatrix.length; i++) {
    console.log(locationMatrix[i])
    if (locationMatrix[i][i] == locationMatrix[i]) {
      return true
    } else {
      for (let n = 0; n < locationMatrix[i].length; n++) {
        console.log(locationMatrix[n])
        if (locationMatrix[n] == locationMatrix[n - 1] || locationMatrix[n] == locationMatrix[n + 1]) {
          return true
        } else {
          return false
        }
      }
    }
  }
}

console.log(collisionCheck([[1, 2, 0], [2, 0, 0], [0, 0, 0]]))
