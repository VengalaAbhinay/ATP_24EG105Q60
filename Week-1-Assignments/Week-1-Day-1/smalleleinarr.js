const marks = [90, 78, 65, 98];

let smallest = marks.reduce((min, value) => {
  return value < min ? value : min;
}, marks[0]);

console.log(smallest);