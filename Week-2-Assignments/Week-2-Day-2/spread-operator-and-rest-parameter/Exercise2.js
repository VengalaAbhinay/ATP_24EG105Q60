let user = {
    name: "Ravi",
    city: "Hyderabad"
};
let updateuser={...user,age:25}
console.log("Original object:",user)
console.log("Copied object:",updateuser)