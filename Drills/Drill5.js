function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) - Linear time
// The time it takes just depends on the size of the input array