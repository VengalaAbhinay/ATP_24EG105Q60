const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
const instock=cart.filter(product=>product.inStock)
console.log("Instock products:",instock)
const nameandtprice=cart.map(item=>({

        name:item.name,
        totalprice:item.price*item.quantity
}))
console.log("New Array:",nameandtprice)
const grandtotal=cart.reduce((total,item)=>total+(item.price*item.quantity),0)
console.log("Grand total:",grandtotal)
let mouse=cart.find(item=>item.name=="Mouse")
if(mouse)
    console.log("Mouse datails are:",mouse)
let indexofkeyboard=cart.findIndex(item=>item.name=="Keyboard")
console.log("Index of keyboard :",indexofkeyboard)