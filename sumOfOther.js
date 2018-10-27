const sumOfOther = function sumOfOtherNumbersOfArray(array) {
  const resultSum = array.map(
    (_val, index, arr) =>
    (arr.reduce((acc, item) => acc + item) - arr[index]))
  return resultSum;
}
