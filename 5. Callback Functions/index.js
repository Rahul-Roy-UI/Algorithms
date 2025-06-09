// https://www.youtube.com/watch?v=jyfS7rMRmDk&list=PLC8OkhrVTHNFITtT_TzfBbn8SohEU8Cpa&index=7&ab_channel=NishaSingla
// Callback Functions
// ! https://www.w3schools.com/js/js_callback.asp ==> Read

function task1() {
    console.log('Some task is in progress');
}

function task2(callback) {
    console.log('Task2 is in progress');
    callback();
}

// one way
// task2(task1);

// another way
task2(() => {
    console.log('Some task is in progress');
});
