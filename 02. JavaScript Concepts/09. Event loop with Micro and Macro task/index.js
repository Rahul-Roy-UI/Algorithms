// https://chatgpt.com/c/687a3046-6cdc-8007-a64b-48dc68ea9e0a

console.log(1);


// web api

setTimeout(() => {

    console.log(2);

    Promise.resolve().then(() => console.log('Surprise!'));

}, 0);



// web api

async function nested() {

    console.log(3);

    await Promise.resolve();

    console.log(4);

    setTimeout(() => console.log(5), 0);

}



Promise.resolve().then(() => {

    setTimeout(() => {

        new Promise(resolve => resolve()).then(() => console.log(6));

    }, 0);

});



// web api

Promise.resolve().then(nested);

console.log(7);

