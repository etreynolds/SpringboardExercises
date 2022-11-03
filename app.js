// const colors = ['teal', 'cyan', 'purple', 'peach'];

// colors.forEach(function (val) {
//     console.log(val.toUpperCase());
// });

//===================================================================

// const prices = [30.99, 19.99, 2.50, 99.00];
// let total = 0;

// prices.forEach(function (price) {
//     total += price;
// })
// console.log(total);

//====================================================================

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// forEach(colors, function (color) {
//     console.log(color.toUpperCase());
// })

// ================================= MAP ===================================

// const numbers = [21, 37, 64, 99, 142];

// const negatives = numbers.map(function (num) {
//     return num * -1;
// })

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })


// creating a map method
// function myMap(arr, callback) {
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const val = callback(arr[i], i, arr);
//         mappedArray.push(val);
//     }
//     return mappedArray;
// }

// const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function (str, idx) {
//     return str.repeat(idx + 1);
// })

// =================================== FILTER ===================================

// let letters = ['a', 'b', 'c', 'b', 'c'];

// const bLetters = letters.filter(function (val, idx, arr) {
//     return val === 'b';
// })

// // Writing our own .filter method
// function myFilter(arr, callback) {
//     const filteredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             filteredArray.push(arr[i])
//         }
//     }
//     return filteredArray;
// }

function moreThan25Char(arr) {

}