// https://chatgpt.com/c/6880a6db-d0fc-8007-8b4d-8bcf4e29da61
// https://chatgpt.com/c/6880c797-9f38-8007-be16-0663eba0a0bb

// ! Q1: What does map() do in JavaScript?
// map() creates a new array by applying a function to each element in the original array.
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


// !Purpose: To transform each object into a new format or extract specific properties.
// ! Example 1: Extract all names
const employees = [
    { id: 1, name: "Rahul", age: 30, department: "Frontend" },
    { id: 2, name: "Anita", age: 24, department: "Backend" },
    { id: 3, name: "Suresh", age: 35, department: "Frontend" },
    { id: 4, name: "Rita", age: 29, department: "QA" }
];

const names = employees.map(emp => emp.name);
console.log(names);
// ["Rahul", "Anita", "Suresh", "Rita"]

// ! Example 2: Add a new property
const updated = employees.map(emp => ({
    ...emp,
    isSenior: emp.age > 30
}));
console.log(updated);

// ! Formatting Data for UI Display
const users = [
    { id: 1, firstName: "Rahul", lastName: "Roy" },
    { id: 2, firstName: "Anita", lastName: "Sharma" },
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames); // ["Rahul Roy", "Anita Sharma"]


// ! Rendering List Items in React
{
    users.map(user => (
        <li key={user.id}>{user.firstName} {user.lastName}</li>
    ))
}

// ! Extract Specific Property from Nested Arrays
const teams = [
    { name: "Team A", members: ["Rahul", "Anita"] },
    { name: "Team B", members: ["Rita", "Suresh"] }
];

const memberCounts = teams.map(team => team.members.length);
console.log(memberCounts); // [2, 2]

// ! Convert Values (e.g., Celsius to Fahrenheit)
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(c => (c * 9 / 5) + 32);
console.log(fahrenheit); // [32, 50, 68, 86]

// ! Add Index or Position Info
const letters = ['a', 'b', 'c'];
const withIndex = letters.map((letter, index) => `${index + 1}: ${letter}`);
console.log(withIndex); // ["1: a", "2: b", "3: c"]

// !  Transform API Data
const apiData = [
    { id: 1, username: "rahul", password: "123", token: "abc" },
    { id: 2, username: "anita", password: "456", token: "def" }
];

const cleaned = apiData.map(({ id, username }) => ({ id, username }));
console.log(cleaned);
//
const cleanedTwo = apiData.map(function (user) {
    return {
        id: user.id,
        username: user.username
    };
});
// [ { id: 1, username: 'rahul' }, { id: 2, username: 'anita' } ]

// ! Chaining with filter or reduce
const newemployees = [
    { name: "Rahul", age: 30 },
    { name: "Anita", age: 24 }
];

const namesOver25 = newemployees
    .filter(emp => emp.age > 25)
    .map(emp => emp.name);

console.log(namesOver25); // ["Rahul"]

// ! Return an array of user names in uppercase

const usersNew = [
    { id: 1, name: "rahul" },
    { id: 2, name: "anita" },
];

const result = usersNew.map(user => user.name.toUpperCase());

// ! Convert an array of strings into an array of objects like this:
// ["apple", "banana"] → [{ name: "apple" }, { name: "banana" }]
const arr = ["apple", "banana"];
const resultObj = arr.map(item => ({ name: item }));

// ! Given an array of prices (in dollars), convert them to INR assuming 1 USD = 83 INR.
const prices = [10, 20, 5];
const inrPrices = prices.map(price => price * 83);

// ! What would be the output of the following code?
const resultTricky = [1, 2, 3].map(console.log);

// 1 0 [1, 2, 3]
// 2 1 [1, 2, 3]
// 3 2 [1, 2, 3]


// ! Using map() on Object.entries()
// ! https://www.w3schools.com/jsref/jsref_object_entries.asp
const obj = { a: 1, b: 2 };
const objArr = Object.entries(obj); // [ [ 'a', 1 ], [ 'b', 2 ] ]
const mapped = objArr.map(([key, value]) => `${key.toUpperCase()}:${value}`);
console.log(mapped); // ["A:1", "B:2"]


// ! Returning odd and even Based on Conditions
const data = [1, 2, 3, 4, 5];
const mixed = data.map(n => n % 2 === 0 ? { even: n } : { odd: n });
console.log(mixed);
// [{ odd: 1 }, { even: 2 }, { odd: 3 }, ...]

// Using map() inside useMemo() in React
const memoizedList = useMemo(() => {
    return users.map(user => user.name);
}, [users]);



