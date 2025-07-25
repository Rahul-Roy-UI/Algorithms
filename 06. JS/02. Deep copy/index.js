const obj = {
    date: new Date(),
    value: Infinity,
    undef: undefined,
    regex: /abc/,
};

const jsonCopy = JSON.parse(JSON.stringify(obj));
console.log(jsonCopy.date); // string, not Date
console.log(jsonCopy.value); // null
console.log(jsonCopy.undef); // lost
console.log(jsonCopy.regex); // lost

const clone = structuredClone(obj);
console.log(clone.date instanceof Date); // true
console.log(clone.value); // Infinity
console.log(clone.undef); // undefined
console.log(clone.regex); // /abc/
