const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const it=employees.filter(item=>item.department=="IT")
console.log("IT department:",it)
const netsalaryemp=employees.map(item=>({
    ...item,
    netSalary:item.salary+0.1*item.salary
}))
console.log("After adding net salary:",netsalaryemp)
const totalsalary=employees.reduce((acc,curr)=>acc+curr.salary,0)
console.log("Total salary payout:",totalsalary)
let emp=employees.find(item=>item.salary==30000)
if(emp)
    console.log("Employee with 300000 salary:",emp)
let indexofneha=employees.findIndex(item=>item.name=="Neha")
console.log("Index of Neha :",indexofneha)