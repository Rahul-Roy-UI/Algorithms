// ! DeepClone

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; // primitives (number, string, boolean, null, undefined)
    }

    if (Array.isArray(obj)) {
        return obj.map(deepClone); // recursively clone each array item
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]); // recursively clone each property
        }
    }

    return clonedObj;
}

const original = {
    name: "Rahul",
    details: {
        age: 30,
        hobbies: ["coding", "reading"]
    }
};

const copy = deepClone(original);
copy.details.age = 31;

console.log(original.details.age); // 30 — original is unchanged
console.log(copy.details.age); 