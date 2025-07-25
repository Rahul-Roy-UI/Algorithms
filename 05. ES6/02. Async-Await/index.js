async function foo() {
    var res = await fetch("https://jsonplaceholder.typicode.com/posts");
    var data = await res.json();
    console.log(data);
}

foo();

// ! using Arrow fucntion
// const foo =  async () => {
//   var res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   var data = await res.json();
//   console.log(data);
// }

// foo();