/**
 * Performs an insertion sort on the given array.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function insertionSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
  return arr;
}

module.exports = insertionSort;
