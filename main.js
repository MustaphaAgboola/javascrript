
// if(x == 10){
//     console.log('x is 10')
// } else if(x < 10) {
//         console.log('x is less than 10');
//     } else {
//         console.log('x is greater than 10');
//     }

var x = 10;

switch (x) {
    case 10:
        console.log('x is 10');
        break
    case 20:
        console.log('x is 20');
        break;
    default:
        console.log('x is not 10 nor 20')
}

// var items = [1,2,3,4]

// for (i = 0; i < items.length; i++ ){
//     console.log(items[i]);
// }


// Array MAP Method
// Map method is used to create a new Array from an existing array
// It always takes function as parameter 


// The function
function getSquare(number) {
    return number * 3
}


//  const numbers = [1, 2, 3, 4];

// const squareOfNumbers = numbers.map(getSquare);

// console.log(squareOfNumbers);

//Reduce Method
// Reduce Methods takes in two parameter (function, datatype or accumulator)
// The result of the method is going to be the datatype
//you can pass an initial to the accumulator as an optional argument

// function getSum(result, item) {
//     return result + item   
// }

// const numbers = [1, 2, 3, 4];
// const sumOfNumbers = numbers.reduce(getSum, '')
// console.log(sumOfNumbers);

// Filter method
// It will return another array
// It will always take in function

// function greaterThanTwo(item) {
//     return item > 2

// }

// const numbers = [1,2,3,4];
// let greaterThanTwoArr = numbers.filter(greaterThanTwo)

// console.log(greaterThanTwoArr);

//     JavaScript Functions

//It is a piece of code that with a single purpose
// It peovides a way to reuse functionality

// let sum = addThis(4, 3)
// console.log(sum);

// // Invoke Function
// let sum = addThis(2,3)
// console.log(sum);
// let sum = addMe(4);
// console.log(sum);

// Function Expression

// var addMe = (a, b) => a + b

// let sum = addMe(2, 3)

// console.log(sum);
// // Function Declaration
// function addThis(a, b) {
//     return a - b;
// }
// var sum = addMe(1,2)
// console.log(sum);

