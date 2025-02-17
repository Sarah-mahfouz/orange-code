// function findSmallest(arr){
//     return Math.min(...arr);
// }
// console.log(findSmallest([30,45,60,7]) )

// function AlphabeticalOrder(str) {
//     return str.split('').sort().join('');
// }
// console.log(AlphabeticalOrder('hello'));

// function factorial(n){
//     let result = 1;
//     for (let i=2; i<=n; i++){
//         result *=i;
//     }
//     return result;
// }
// console.log(factorial(8));

// function oddoreven(num){
//     return num % 2 === 0 ? "Even" : "Odd"
// }
// console.log(oddoreven(9));
// console.log(oddoreven(4));

// function removeoddnumbers(arr) {
//   return arr.filter(num=> num % 2 === 0)
// }
// console.log(removeoddnumbers([1,2,3,4,,5,6]));


// function evennum(arr){
//     return arr.filter(num=> num % 2===0);
// }
// console.log(evennum([1,2,3,4,5,6,7,8,9]))

// function numbersOnly(arr) {
//     return arr.filter(function(item){
//         return typeof item === "number";
//     });
// }
// console.log(numbersOnly(['ayham', 3 , 7, 'Alaa' , 13 ,'coding']));

// function addUp(n) {
//    return (n * (n+1)) / 2;
// }
// console.log(addUp(8));

// function minMaxlengthAverage(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     let sum = 0
//      for ( let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//         sum += arr[i]
//      }
//       let length = arr.length;
//       let average = sum / length;

//       return [min , max , length , average]
// }

// console.log(minMaxlengthAverage([7 , 13 , 3 , 77 , 100]))

// function romanNumbers(num) {
//     const romanNumerals = [
//         { value: 1000, symbol: "M" },
//         { value: 900, symbol: "CM" },
//         { value: 500, symbol: "D" },
//         { value: 400, symbol: "CD" },
//         { value: 100, symbol: "C" },
//         { value: 90, symbol: "XC" },
//         { value: 50, symbol: "L" },
//         { value: 40, symbol: "XL" },
//         { value: 10, symbol: "X" },
//         { value: 9, symbol: "IX" },
//         { value: 5, symbol: "V" },
//         { value: 4, symbol: "IV" },
//         { value: 1, symbol: "I" }
//     ];
//     let result = "";

//     for (let i = 0; i < romanNumerals.length; i++) {
//         while (num >= romanNumerals[i].value) {
//             result += romanNumerals[i].symbol;
//             num -= romanNumerals[i].value;
//         }
//     }
//    return result;
// }
// console.log(romanNumbers(1989));

// function countWords(str) {
//     return str.trim().split(/\s+/).length;
// }
// console.log(countWords('hello from CodingAcademy! ')); 

// function MultiplyByLength(arr) {
//     return arr.map(num => num * arr.length);
// }

// console.log(MultiplyByLength([4, 2, 5])); 


// 

// function doubleChar(str) {
//     return str.split("").map(char => char + char).join("");
// }
// console.log(doubleChar("Coding")); 

// function findIndex(arr, element) {
//     return arr.indexOf(element);
// }
// console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Mazen')); 

// function getAbsSum(arr) {
//     return arr.reduce((sum, num) => sum + Math.abs(num), 0);
// }
// console.log(getAbsSum([-1, -3, -5, -4, -10, 0])); // 23



