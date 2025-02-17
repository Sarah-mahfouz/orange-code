// let age = 27;

// if (age > 18) {
//     console.log("You are an adult");
// }

// let score = 45;

// if (score <= 50) {
//     console.log("You failed the test");
// }

// let name = "John";

// if (name === "John") {
//     console.log("Hello, John");
// }

// let day = "Monday";

// if (day !== "Saturday" && day !== "Sunday") {
//     console.log("It's a weekday");
// }

// let num = 4;
// if (num % 2 === 0){
//     console.log("the number is even");
// }

// let char = 'a';
// if (typeof char === 'string' && char.length === 1 && /[a-zA-Z]/.test(char)) {
//     console.log("It's a letter");
// }

// let list = [1, 2, 3]; 
// if (Array.isArray(list)) {
//     console.log("It's an array");
// }

// let x = 5; 
// if (typeof x === 'number' && x > 0) {
//     console.log("x is a positive number");
// }

// let y = -5; 
// if (typeof y === 'number' && y < 0) {
//     console.log("y is a negative number");
// }

// let z = 9; 

// if (z % 3 === 0) {
//     console.log(${z} is a multiple of 3);
// }

// let gpa = 3.5;
// if (gpa >= 3.0) {
//     console.log("congratulations, you have a good GPA!")
// }

// let password = "mypassword123";
// if (password.length >= 8) {
//     console.log("Your password is strong")
// }

// let age = 30;
// if (age >= 18 && age <= 65) {
//     console.log("You are of working age")
// }

// let age = 30;
// if (age >= 18 && age <= 65) {
//   console.log("You are working age");
// }

// let color = "red";
// if (color === "red" || color === "green" || color === "blue"){
//     console.log("color is a primary color")
// }

// let color = "red";
// if (color === "red" || color === "green" || color === "blue") 
// {
//     console.log("color is a primary color" )
// }

// function isValidNumber(value){
//     if (!isNaN(value) && value !== "" && !isNaN(parseFloat(value))){
//         return `"${value}" is a valid number`;
//     } 
//     else {
//         return `"${value}" ia not a number`
//     }
// }
// console.log(isValidNumber(11));
// console.log(isValidNumber("19"));
// console.log(isValidNumber("xyz"));
// console.log(isValidNumber("17.5"));
// console.log(isValidNumber("21f"));

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (i = 0; i <= 10; i += 2){
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum += i
// }
// console.log(sum);

// let arr = [1,2,3,4,5];
// let max = arr[0];
// for ( let i = 1; i < arr.length; i++){
//     if (arr[i] > max ){
//         max = arr[i]
//     }
// }
// console.log(max);

// let arr = [5 , 4 , 3 , 2 , 1];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min);

// let arr = [1 , 2, 3 , 4 , 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// let average = sum / arr.length;
// console.log(average);

// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i<=n; i++){
//         result *= i;
//     }
//     console.log(result);
// }
// factorial(5);

// function fibonacci(n) {
//     let a = 0, b = 1 , next;
//     let sequence = [a,b];
//     for (let i = 2 ; i<n ; i++){
//         next = a + b ;
//         if (next > n) break;
//         sequence.push(next);
//         a = b;
//         b = next;
//     }
//     console.log(sequence.join(" "));
// }
// fibonacci(10);

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++){
//         if (num % i === 0) return false ;
//     }
//     return true;
// } 

// function printPrimes(n) {
//   let primes = [];
//   for (let i = 2; i<= n; i++) {
//     if (isPrime(i)) primes.push(i)
//   }
// console.log(primes.join(" "));
// }
// printPrimes(20);

// function multiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} x ${i} = ${n * i }`);
//     }
// }

// multiplicationTable(5);

// function print2DArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result.push(arr[i][j]);
//         }
//     }
//     console.log(result.join(" "));
// }

// print2DArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);


// function printReverse(arr) {
//     console.log(arr.reverse().join(" "));
// }

// printReverse([1, 2, 3, 4, 5]);

// function printRange(arr, start, end) {
//     console.log(arr.slice(start, end + 1).join(" "));
// }

// printRange([1, 2, 3, 4, 5], 2, 4);

// function printWithStep(arr, step) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += step) {
//         result.push(arr[i]);
//     }
//     console.log(result.join(" "));
// }

// printWithStep([1, 2, 3, 4, 5], 2);

// function isNumberInArray(arr, num) {
//     console.log(arr.includes(num));
// }

// isNumberInArray([1, 2, 3, 4, 5], 4);

// function findFrequency(arr, target) {
//     let count = 0;

//     arr.forEach(num => {
//         if (num === target) count++;
//     });

//     return count;
// }
// console.log(findFrequency([1, 2, 1, 3, 2, 1], 1)); 






