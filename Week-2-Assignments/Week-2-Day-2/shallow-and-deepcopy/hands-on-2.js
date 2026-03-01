const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
        city: "Hyderabad",
        pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};
const copyorder=structuredClone(order)
copyorder.customer.address.city="karimnagar"
copyorder.items[0].price=100000
console.log("Original Order:");
console.log(order);

console.log("Copied & Modified Order:");
console.log(copyorder);