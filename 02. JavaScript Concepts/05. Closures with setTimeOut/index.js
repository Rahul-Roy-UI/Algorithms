// ! setTimeout + Closures Interview Question
// https://chatgpt.com/c/688109ad-3e48-8007-ab70-45a071c2ec7d
function x() {
    for (var i = 0; i <= 5; i++) {

        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);

        }
        close(i);
    }
}

x();


// ! Prints 6
// function x() {
//     for (var i = 0; i <= 5; i++) {


//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000);


//     }
// }

// x(); 

// ! prints 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}