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

// function moreThan25Char(arr) {
//     arr.some(function (val) {
//         return word
//     })
// }

// let delicious = 'Mayonnaise';
// let disgusting = "Whipped Cream";

// [delicious, disgusting] = [disgusting, delicious];

// const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })


// ******************************************
//                 MAP STUFF
// ******************************************

// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7', 'seven string');



// function isVowel(char) {
//     return "aeiou".includes(char);
// }

// function vowelCount(str) {
//     const vowelMap = new Map();
//     for (let char of str) {
//         let lowerCaseChar = char.toLowerCase()
//         if (isVowel(lowerCaseChar)) {
//             if (vowelMap.has(lowerCaseChar)) {
//                 vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
//             } else {
//                 vowelMap.set(lowerCaseChar, 1);
//             }
//         }
//     }
//     return vowelMap;
// }

// PART 1

class Vehicle {
    constructor(make, model, year) {
        this.year = year;
        this.make = make;
        this.model = model;
        // console.log(`Your vehicle is a ${year} ${make} ${model}`)
    }

    honk() {
        return 'Beep.';
    }

    toString() {
        return `Your vehicle is a ${this.year} ${this.make} ${this.model}`;
    }
}

const myVehicle = new Vehicle('Subaru', 'Forester', 2017);

// PART 2

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}
const myCar = new Car('Toyota', 'Corolla', 2005);

// PART 3

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
}

const myMotorcyle = new Motorcycle('Honda', 'Nighthawk', 2000);

// PART 4

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles allowed!';
        }
        if (this.vehicles.length >= this.capacity) {
            return 'All full!';
        }
        this.vehicles.push(newVehicle);
        return 'New vehicle added!';
    }
}

const garage = new Garage(2);