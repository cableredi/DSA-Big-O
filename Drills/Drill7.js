function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// O(n) Linear time
// this is a linear way to solve the Fibonacci sequence
// The most time consuming operation has a big O oproximation of Linear time
// the function loops a number of times equal to the value of the input.
// Assuming the number is 3 or larger, the first iteration pushes a zero into an
// empty array and the second iteration pushes a 1 into the array. Iterations from
// this point forward push the sum of the two prior values in the array.