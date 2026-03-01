function searchElement(arr, element) {
  let index = arr.indexOf(element);

  if (index === -1) {
    return "not found";
  }
  return index;
}

console.log(searchElement([10, 20, 30, 40], 30)); // 2
console.log(searchElement([10, 20, 30, 40], 50)); // "not found"