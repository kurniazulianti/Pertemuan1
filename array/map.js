// const numbers = [1, 4, 9, 16];
// const newNumbers = numbers.map(number => number * 2);

// console.log(newNumbers);

let numbers = [1, 4, 9, 16];
let newNumbers = numbers.map(function (n){
    return "Angka " + n;
});

console.log(numbers);
//output: [1, 4, 9, 16]

console.log(newNumbers);
//output: [Angka 1, Angka 4, Angka 9, Angka 16]