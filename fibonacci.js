// Example 1:
//Function to generate the Fibonacci sequence up to the n-th term
function fibs(n) {
    // Initialize an array with the first two terms of the Fibonacci sequence
    let fibArray = [0, 1];

    // Loop to calculate the subsequent terms
    for (let i = 2; i <= n; i++) {
        // Calculate the i-th term by summing the last two terms
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    // Return the generated Fibonacci sequence
    return fibArray;
}

// Example: Generate Fibonacci sequence up to the 10th term
const result = fibs(10);

// Output the result
console.log(result);


//Example 2:
// Function to generate Fibonacci sequence up to a given number
function fibs(num) {
    // If the input is zero or negative, return undefined
    if (num <= 0) return;

    // If the input is 1, return an array containing only 0
    if (num === 1) return [0];

    // If the input is 2, return the base Fibonacci sequence [0, 1]
    if (num === 2) return [0, 1];

    // Initialize an array with the base Fibonacci sequence [0, 1]
    let arr = [0, 1];

    // If the input is greater than 2, calculate the Fibonacci sequence
    if (num > 2) {
        // Loop to generate Fibonacci sequence starting from the third element
        for (let i = 0; i < num - 2; i++) {
            // Each new element is the sum of the last two elements
            arr.push(arr[i] + arr[i + 1]);
        }
    }

    // Return the generated Fibonacci sequence array
    return arr;
};


//Example 3:
// Recursive function to generate Fibonacci sequence up to a given number
function fibsRec(num) {
    let result;

    // Base case: If the input is less than 1, return undefined
    if (num < 1) return;

    // Base case: If the input is 1, return an array containing only 0
    if (num === 1) return [0];

    // Base case: If the input is 2, return the base Fibonacci sequence [0, 1]
    if (num === 2) return [0, 1];

    // Recursive case for num greater than or equal to 3
    if (num >= 3) {
        // Recursively call fibsRec with num-1
        result = fibsRec(num - 1);

        // Calculate the current Fibonacci number and push it to the result array
        let current = result[num - 3] + result[num - 2];
        result.push(current);
    }

    // Return the generated Fibonacci sequence array
    return result;
}
