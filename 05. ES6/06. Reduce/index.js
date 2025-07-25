// Grouping by department using reduce
// https://chatgpt.com/c/6878cfa4-842c-8007-b391-57da8bda6c17
// https://onecompiler.com/javascript/43rhdhk26

const employees = [
    { name: "Rahul Roy", age: 30, department: "Frontend Development" },
    { name: "Anita Sharma", age: 27, department: "Quality Assurance" },
    { name: "Vikram Mehta", age: 35, department: "Backend Development" },
    { name: "Priya Desai", age: 29, department: "UI/UX Design" },
    { name: "Amit Kumar", age: 32, department: "Frontend Development" }
];

const groupedByDepartment = employees.reduce((acc, curr) => {
    const dept = curr.department;

    // Only keep name and age
    const employeeInfo = {
        name: curr.name,
        age: curr.age
    };

    if (!acc[dept]) {
        acc[dept] = [];
    }
    acc[dept].push(employeeInfo);
    return acc;
}, {});

console.log(groupedByDepartment);