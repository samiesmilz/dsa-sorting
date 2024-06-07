/**
 * Returns the digit at the specified place value (0-indexed) of a given number.
 * @param {number} num - The number to extract the digit from.
 * @param {number} place - The place value (0-indexed) of the digit to extract.
 * @returns {number} The digit at the specified place value.
 */
function getDigit(num, place) {
  const absNum = Math.abs(num);
  const divisor = Math.pow(10, place);
  const digit = Math.floor(absNum / divisor) % 10;
  return digit;
}

/**
 * Counts the number of digits in a given number.
 * @param {number} num - The number to count the digits for.
 * @returns {number} The number of digits in the given number.
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Finds the maximum number of digits among all numbers in the given array.
 * @param {number[]} nums - The array of numbers to find the maximum digit count for.
 * @returns {number} The maximum number of digits among all numbers in the array.
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (const num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

/**
 * Sorts the given array of numbers using the radix sort algorithm.
 * @param {number[]} nums - The array of numbers to sort.
 * @returns {number[]} The sorted array of numbers.
 */
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let place = 0; place < maxDigitCount; place++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (const num of nums) {
      const digit = getDigit(num, place);
      digitBuckets[digit].push(num);
    }
    nums = digitBuckets.flat();
  }
  return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
