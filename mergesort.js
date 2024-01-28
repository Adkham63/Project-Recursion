//Example 1:
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.ceil(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the left and right halves
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
};

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add the remaining elements if any
    return result.concat(left.slice(i)).concat(right.slice(j));
};

//Example 2:
// Merge sort function to sort an array
function mergeSort(arr) {
    // Base case: If the array has less than 2 elements, it is already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Split the array into two halves
    let left = arr.slice(0, Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2));

    // Recursively sort the two halves
    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);

    // Merge the sorted halves
    function merge(arr1, arr2) {
        let result = [];
        let i = 0, j = 0, k = 0;

        // Compare elements from both arrays and merge them in sorted order
        while (k < (arr1.length + arr2.length)) {
            if (arr1[i] <= arr2[j] || arr2[j] === undefined) {
                result[k++] = arr1[i++];
            } else if (arr2[j] < arr1[i] || arr1[i] === undefined) {
                result[k++] = arr2[j++];
            }
        }

        return result;
    }

    // Return the merged result of the sorted halves
    return merge(leftSorted, rightSorted);
}

// Example usage:
const result = mergeSort([5, 3, 8, 4, 2, 7, 1]);
console.log(result); // Output: [1, 2, 3, 4, 5, 7, 8]
