const parentKey = "address";
const childKey = "city";
const value = "Pune";

const user = {
    name: "Rahul",
    age: 30,
    address: {}
};

user[parentKey][childKey] = value;

console.log(user.address.city); // Pune
