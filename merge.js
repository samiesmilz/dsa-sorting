/**
 * Merges two sorted arrays into a single sorted array.
 * @param {Array} arr1 - The first sorted array.
 * @param {Array} arr2 - The second sorted array.
 * @returns {Array} - The merged and sorted array.
 */
function merge(arr1, arr2) {
  // Check if both arguments are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Arguments must be arrays");
  }
  const result = [];
  let [i, j] = [0, 0];
  while (i < arr1.length && j < arr2.length) {
    // If the current element in arr1 is smaller, push it into the result array
    // Otherwise, push the current element in arr2 into the result array
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  // If there are remaining elements in arr1, push them into the result array
  result.push(...arr1.slice(i));
  result.push(...arr2.slice(j));

  // Return the merged and sorted array
  return result;
}

/**
 * Performs a merge sort on the given array.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function mergeSort(arr) {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Base case: if the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) return arr;

  // Calculate the middle index of the array
  // Recursively sort the left and right elements
  // Merge the sorted left and right halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
