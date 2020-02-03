function isWhat(n) {
  if (n < 2 || n % 1 != 0) {
      return false;
  }
  for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
  }
  return true;
}

// O(n) Linear time

// The function checks to see if the input number is not a prime number.
// The most time consuming operation loops a number of times equal to n-2,
// checking to see if the input number is divisible by the current iteration.