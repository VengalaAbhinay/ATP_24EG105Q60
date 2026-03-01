const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
const credited=transactions.filter(item=>item.type=="credit")
console.log(credited)
const onlyamount=transactions.map(o=>({
    id:o.id,
    amount:o.amount
}))
console.log(onlyamount)
let finalamount=transactions.reduce((acc,curr)=>curr.type=="credit"?acc+curr.amount:acc-curr.amount,0)
console.log("Final amount:",finalamount)
let firstdebit=transactions.find(item=>item.type=="debit")
if(firstdebit)
    console.log("First debit amount:",firstdebit)
let indexofamt10000=transactions.findIndex(item=>item.amount==10000)
console.log(indexofamt10000)