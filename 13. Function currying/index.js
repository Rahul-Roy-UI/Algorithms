// ! Function Currying ?
function sum(x) {
    return function (y) {
        return x + y;
    };
}

const res = sum(10)(20);
console.log(res);
