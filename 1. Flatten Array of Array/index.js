// ! How to flatten Array of Array ?
// * Nisha Singla ==> https://www.youtube.com/watch?v=dBk5CJYSr5k&list=PLC8OkhrVTHNFITtT_TzfBbn8SohEU8Cpa&ab_channel=NishaSingla

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
