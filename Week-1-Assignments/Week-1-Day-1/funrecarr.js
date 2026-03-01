function arraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(arraySum([1, 2, 3, 4]));