// ! How to flatten Array of Array ?
// * Nisha Singla ==> https://www.youtube.com/watch?v=dBk5CJYSr5k&list=PLC8OkhrVTHNFITtT_TzfBbn8SohEU8Cpa&ab_channel=NishaSingla
// https://www.w3schools.com/js/js_best_practices.asp ==> Initialize Variables
// https://www.w3schools.com/js/js_functions.asp ==> JavaScript Functions 
// https://www.w3schools.com/JS/js_function_definition.asp ==> JavaScript Function Definitions, Function Hoisting
// https://www.w3schools.com/JS/js_function_parameters.asp ==> Function Parameters and Arguments
// https://www.w3schools.com/jsref/jsref_isarray.asp ==> JavaScript Array.isArray()
// https://www.w3schools.com/js/js_loop_for.asp ==> JavaScript For Loop
// https://www.w3schools.com/jsref/jsref_return.asp ==> JavaScript return

let arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, 11]]];
let output = [];

function flatten(arr) {
    for (i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i]);
        } else {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(flatten(arr));
