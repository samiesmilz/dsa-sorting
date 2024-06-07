/**
 * Bubble Sort algorithm implementation.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 * @example
 * bubbleSort([5, 3, 8, 4, 6, 1]); // returns [1, 3, 4, 5, 6, 8]
 */
/**
 * Sorts an array in ascending order using the Bubble Sort algorithm.
 *
 * @param {Array} arr - The input array to be sorted.
 * @returns {Array} The sorted array in ascending order.
 * @throws {Error} If the input is not an array.
 */
function bubbleSort(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  const len = arr.length;
  let swapped;

  // Outer loop to iterate over each element in the array
  for (let i = len; i > 0; i--) {
    swapped = false;

    // Inner loop to compare adjacent elements and swap if necessary
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no swaps were made in the inner loop, the array is already sorted
    if (!swapped) break;
  }

  return arr;
}

module.exports = bubbleSort;
