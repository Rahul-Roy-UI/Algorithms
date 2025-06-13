// ! merge sort ?
// https://chatgpt.com/c/68401d55-04e0-8007-b90c-4a95fad629e2
// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7715248#overview ==> overview
// https://www.udemy.com/course/learning-algorithms-in-javascript-from-scratch/learn/lecture/7715322#overview ==> animation

function mergeSort(array) {
    if (array.length <= 1) return array; // Base case

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));   // Sort left half
    const right = mergeSort(array.slice(mid));     // Sort right half

    return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and add the smaller one
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example
console.log(mergeSort([7, 3, 8, 1, 2, 4])); // Output: [1, 2, 3, 4, 7, 8]