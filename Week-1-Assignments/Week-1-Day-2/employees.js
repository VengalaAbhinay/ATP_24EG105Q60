const employees=[
    {empno:1,name:"Abhi",marks:[10,20,30]},
    {empno:2,name:"ravi",marks:[11,21,31]},
    {empno:3,name:"Sneha",marks:[12,22,32]},
    {empno:4,name:"Keerthi",marks:[13,23,33]},
    {empno:5,name:"Ruchith",marks:[14,24,34]}
];
console.log(employees)
const newemp={empno:6,name:"Raju",marks:[15,25,35]};
employees.splice(1,0,newemp);
console.log(employees)
const index=employees.findIndex(e=>e.name=="Raju");
if(index!=-1)
    employees.splice(index,1);
console.log(employees)
const sneha=employees.find(e=>e.name=="Sneha");
if(sneha)
    sneha.marks[sneha.marks.length-1]=75;
console.log(employees)