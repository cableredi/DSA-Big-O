function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) - Constant time
// The function selects a random element in the input array.
// The function selects a random number between 0 and 1, multiplies that number
// by the length of the array, and returns the value at that index of the array.