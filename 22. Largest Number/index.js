// ! largestNumberInArray

var arr = [0, 1, 17, -10, 99, 3];

function largestNumberInArray(arr) {
    if (arr.length === 0) return null;

    var largest = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumberInArray(arr)); // Output: 99



// ! smallestNumberInArray

// var arr = [0, 1, 17, -10, 99, 3];

// function smallestNumberInArray(arr) {
//   if (arr.length === 0) return null;

//   var smallest = Infinity;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// console.log(smallestNumberInArray(arr)); // ✅ Output: -10
