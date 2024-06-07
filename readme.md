# Sorting Algorithms

This repository contains implementations of various sorting algorithms in JavaScript. Each algorithm is contained in its respective file:

- `bubble.js` - Bubble Sort
- `insertion.js` - Insertion Sort
- `merge.js` - Merge Sort
- `quick.js` - Quicksort
- `radix.js` - Radix Sort
- `selection.js` - Selection Sort

## Descriptions

### Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. It is an in-place algorithm with a time complexity of O(n^2) in the average and worst cases.

### Insertion Sort

Insertion Sort is an in-place, stable sorting algorithm that works by iterating through an array and inserting each element into its correct position in the sorted portion of the array. It has a time complexity of O(n^2) in the average and worst cases, but is more efficient for smaller or partially sorted arrays.

### Merge Sort

Merge Sort is a divide-and-conquer algorithm that recursively divides the input array into two halves, sorts each half, and then merges them back together. It has a time complexity of O(n log n) in the average and worst cases, making it more efficient for larger arrays.

### Quicksort

Quicksort is another divide-and-conquer algorithm that partitions the input array around a pivot element and recursively sorts the subarrays on either side of the pivot. It has an average time complexity of O(n log n), but a worst-case time complexity of O(n^2) if the pivot is not chosen optimally.

### Radix Sort

Radix Sort is a non-comparative sorting algorithm that sorts integers by processing individual digits, starting from the least significant digit. It has a time complexity of O(kn), where k is the maximum number of digits in any element, making it efficient for sorting large numbers.

### Selection Sort

Selection Sort is an in-place sorting algorithm that repeatedly finds the minimum element from the unsorted part of the array and swaps it with the first element of the unsorted part. It has a time complexity of O(n^2) in the average and worst cases, but it is conceptually simple and has minimal memory overhead.

## Usage

Each file exports the respective sorting algorithm functions, which can be imported and used in your JavaScript code. For example:

```javascript
const { bubbleSort } = require("./bubble.js");

const numbers = [5, 2, 8, 1, 3];
const sortedNumbers = bubbleSort(numbers);

console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]
```

Feel free to explore and use these sorting algorithms in your projects or for educational purposes.
