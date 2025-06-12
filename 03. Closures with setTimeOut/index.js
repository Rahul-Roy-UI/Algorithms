// ! 04. setTimeout + Closures Interview Question
// Akshay ==> https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=13&ab_channel=AkshaySaini
// https://www.w3schools.com/jsref/met_win_settimeout.asp ==> read

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
