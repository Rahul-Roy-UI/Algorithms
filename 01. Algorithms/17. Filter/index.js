// ! https://chatgpt.com/c/6880c797-9f38-8007-be16-0663eba0a0bb
// Q1: What does filter() return?
// Answer: A new array with elements that return true from the callback.

// Q2: Does filter() mutate the original array?
// Answer: ❌ No. It returns a new array.


// Q3: How is filter() different from map()?
// Aspect	map()	                            filter()
// Purpose	Transform each item	                Include only items that match a test
// Returns	Same length array	                May return fewer elements
// Use Case	Add fields, format, calculations	Exclude based on logic

// filter() creates a new array containing only the elements that pass a test (i.e., return true in the callback).
const nums = [1, 2, 3, 4];
const even = nums.filter(num => num % 2 === 0); // [2, 4]


// Filter even or odd numbers
const nums1 = [1, 2, 3, 4, 5];
const evens = nums1.filter(num => num % 2 === 0); // [2, 4]

// Filter objects by condition
const employees = [
    { name: "Rahul", age: 30 },
    { name: "Anita", age: 24 }
];

const over25 = employees.filter(emp => emp.age > 25);
console.log(over25); // [{ name: "Rahul", age: 30 }]

// Remove falsy values from an array
const mixed = [0, 1, "", "hello", null, undefined, true];
const truthy = mixed.filter(Boolean); // [1, "hello", true]

// or

mixed.filter(item => Boolean(item) === true);

// Filtering by Object Property
const usersList = [{ name: "Alice" }, { name: "" }, { name: "Bob" }];
const valid = usersList.filter(u => u.name);

// Remove duplicate elements
const arr = [1, 2, 2, 3, 4, 4];
const unique = arr.filter((value, index, self) => self.indexOf(value) === index);
console.log(unique); // [1, 2, 3, 4]

// Filter by search term (case insensitive)
const names = ["Rahul", "Anita", "Ravi"];
const search = "ra";
const filtered = names.filter(name =>
    name.toLowerCase().includes(search.toLowerCase())
); // ["Rahul", "Ravi"]


// Filter invalid or empty entries
const users = [
    { id: 1, name: "Rahul" },
    null,
    { id: 2, name: "Anita" },
    undefined
];

const validUsers = users.filter(user => user && user.name);


// Chaining with map()
const result = employees
    .filter(emp => emp.age > 25)
    .map(emp => emp.name); // ["Rahul"]

// Filter from nested arrays
const teams = [
    { name: "Team A", members: ["Rahul", "Anita"] },
    { name: "Team B", members: [] }
];

const nonEmptyTeams = teams.filter(team => team.members.length > 0);

// Filtering Nested Properties
const products = [{ id: 1, meta: { available: true } }, { id: 2, meta: { available: false } }];
const available = products.filter(p => p.meta.available);


// Filter objects by property
const usersNew = [
    { name: "Rahul", active: true },
    { name: "Anita", active: false },
];
const activeUsers = usersNew.filter(user => user.active);

// Filter based on multiple conditions
const employeesNew = [
    { name: "Rahul", age: 30, department: "Frontend" },
    { name: "Anita", age: 24, department: "Backend" },
    { name: "Suresh", age: 35, department: "Frontend" },
];

const seniorFrontend = employeesNew.filter(
    e => e.department === "Frontend" && e.age > 30
);