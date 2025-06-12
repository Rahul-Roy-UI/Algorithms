// ! Function Currying ?
// * Nisha Singla ==> https://www.youtube.com/watch?v=yRivcr6gv-U&list=PLC8OkhrVTHNFITtT_TzfBbn8SohEU8Cpa&index=4&ab_channel=NishaSingla
// https://www.w3schools.com/js/js_function_closures.asp ==> JavaScript Closures
// 

function sum(x) {
    return function (y) {
        return x + y;
    };
}

const res = sum(10)(20);
console.log(res);
