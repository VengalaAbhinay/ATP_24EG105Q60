const marks = [90, 78, 65, 98];

let largest = marks.reduce((max, num) => {
  return num > max ? num : max;
});

console.log(largest);