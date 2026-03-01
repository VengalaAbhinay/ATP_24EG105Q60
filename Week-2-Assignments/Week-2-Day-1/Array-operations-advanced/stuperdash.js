const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
const passed=students.filter(item=>item.marks>=40)
console.log("passed :",passed)
const gradestudents=students.map(item=>({
    ...item,
    grade:
    item.marks>=90?"A":
    item.marks>=75?"B":
    item.marks>=60?"C":"D"
}))
console.log("Array with grades:",gradestudents)
let avg=students.reduce((acc,curr)=>acc+curr.marks,0)/students.length
console.log("Average marks:",avg)
let scored92=students.find(item=>item.marks==92)
if(scored92)
    console.log("student scored marks 92:",scored92)
let indexofkiran=students.findIndex(item=>item.name=="Kiran")
console.log("Index of kiran:",indexofkiran)