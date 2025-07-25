// https://chatgpt.com/c/6877ce84-5160-8007-99e4-f049a484a526

const obj = {
    name: 'Rahul',

    regularFunc: function () {
        console.log(this.name); // ✅ 'Rahul'
    },

    arrowFunc: () => {
        console.log(this.name); // ❌ undefined
    },
};


const obj2 = {
    name: 'Rahul',

    method: function () {
        const inner = () => {
            console.log(this.name); // ✅ 'Rahul'
        };
        inner();
    },
};

obj.method(); // ✅ Rahul

const obj3 = {
    name: 'Rahul',

    method: () => {
        const inner = () => {
            console.log(this.name); // ❌ undefined
        };
        inner();
    },
};

obj3.method(); // ❌ undefined

