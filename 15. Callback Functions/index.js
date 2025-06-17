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
