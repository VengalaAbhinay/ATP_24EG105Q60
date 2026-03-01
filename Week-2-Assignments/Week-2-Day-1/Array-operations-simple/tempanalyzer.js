const temperatures = [32, 35, 28, 40, 38, 30, 42];
console.log("Initial temperatures:",temperatures)
const above35=temperatures.filter(t=>t>35)
console.log("Temperatures above 35:",above35)
const ctof=temperatures.map(t=>(t*9/5)+32)
console.log("Temperatures from celcius to Fahrenheit:",ctof)
const sum=temperatures.reduce((total,t)=>total+t,0)
const average=sum/temperatures.length
console.log("Average of marks:",average)
const above40=temperatures.find(t=>t>40)
console.log("temperatures above 40:",above40)
const index=temperatures.findIndex(t=>t==28)
console.log(index)