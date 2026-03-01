const user = {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
    }
};
const copyuser={...user}
copyuser.name="Abhi"
copyuser.preferences.theme="White"
console.log("original",user)
console.log("Copied",copyuser)