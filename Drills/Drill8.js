function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
      currentIndex = Math.floor((minIndex + maxIndex) / 2);
      currentElement = array[currentIndex];

      if (currentElement < item) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > item) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }
  return -1;
}

// O(logn) - Linear Time
// The function is searching through an array input for a value input
// After setting up variables, the function loops throught the array checking to see whether
// or not the current value is less than the value input. 
// If yes, it subdivides the array by setting the lowerbounds to the current 
// index + 1.
// If no, it subdivides the array by setting the upperbounds to the current
// index - 1.
// Eventually the function will either return the currentIndex, if it equals the
// value input or -1 if it doesn't.