let array1 = [2, 3, 4];

let a;
let b;
let c;

//cara biasa
// a = array1[0];
// b = array1[1];

// console.log(a, b);

//cara destructuring

[a, b, c] = array1;

console.log(a, b, c);
console.log(a + "," + b + "," + c);
console.log('${a}, ${b}, ${c}');