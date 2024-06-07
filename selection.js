/**
 * Sorts the given array in ascending order using the Selection Sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} The sorted array.
 */
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // If the minimum element is not in its correct position, swap it with the current element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

module.exports = selectionSort;
