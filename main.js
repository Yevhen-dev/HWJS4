//Create a wellcomUser function that takes an array and a hiUser callback that outputs to the console ('Hello ${user}'),
// and calls this function for each element of the array.

let usersArr = [ "Jack", "Mia", "Ryan", "Craig" ];

function hiUser ( user ) {
    console.log( `Hello ${user}` );
}

function wellcomUser ( arr, callback ) {
    for ( let i = 0; i < arr.length; i++ ) {
        callback( arr[i] );
    }
}

wellcomUser( usersArr, hiUser );


//Arrow functions rewrite the previous function into an arrow function

const wellcomUserArrow = ( arr, callback ) => {
    for ( let i = 0; i < arr.length; i++  ) {
        callback ( arr[i] );
    }
}

wellcomUserArrow( usersArr, hiUser );


//Create  a function that takes two numbers: a base and an exponent, and returns the result of raising the base to exponent 

function myPow ( base, exponent ) {
    let total = 0;
    for ( let i = 1; i < exponent; i++ ) {
        if( total === 0 ) {
            total = base * base;
        } else {
            total = total * base;
        }
        
    }
    return total;
}

console.log( myPow( 6, 3 ) );

// Create  a function that takes an array of numbers and returns a new array containing the squares of each numbers.

let numArr = [2, 3, 5, 7, 12]

function arrPow ( arr ) {
    let newArr = [];
    arr.forEach( item => newArr.push( Math.pow( item, 2 ) ) );
    return newArr;
}

console.log( arrPow( numArr ) );

// Task arrays methods:
// push:

//Create an empty array and use the method push to add multiple elements (such as numbers or strings) to it.

let emptyArr = [];
emptyArr.push( 1,2,3 );

//Create a function that takes an array and an element and uses push to add that element to the array.

let otherEmptyArr = [];

function pushToArr( arr, item ) {
    arr.push( item );
}

pushToArr( otherEmptyArr, 3 );

// pop:

// Create an array and use the”pop” to remove the last element from the array.

let numArrPop = [ 1, 2, 3, 6 ];
numArrPop.pop();

// Write a function that takes an array and uses pop to remove the last element of the array.

function deleteFromArr ( arr ) {
    arr.pop();
}

deleteFromArr( numArrPop );

// unshift:
// Create an array and use the “unshift” to add elements to the beginning of the array.

let unshiftArr = [ 6, 8, 45 ];
unshiftArr.unshift( 11 );

// Write a function that takes an array and an element and uses unshift to add that element to the beginning of the array.

function addItemToArr ( arr, item ) {
    arr.unshift( item );
}

addItemToArr( unshiftArr, 49 );

// shift:

// Create an array and use the “shift” to remove the first element from the array.

let shiftArr = [ 6, 8, 9, 55 ];
shiftArr.shift();

// Write a function that takes an array and uses shift to remove the first element of the array.
function delFromArrShift( arr ) {
    arr.shift();
}

delFromArrShift(shiftArr);

// fill:
// Create an array of a certain size and use the “fill” to fill it with a certain value.

let arrFill =  [ 0, 0, 0, 0 ]
arrFill.fill( 2, 1, 4 );


// Write a function that takes an array, values, and indexes , and uses “fill” to fill the array with the values at the specified positions.

function fillArr( arr, num, start, end ) {
    arr.fill( num, start, end );
}

fillArr( arrFill, 6, 0, 2 );



// Additional tasks
// Create a function that accepts an array and a number. The function should add this number to the array if 
// it doesn't already exist and return the updated array.

let number = [ 1, 15, 88 ]

function addNumtoArr ( arr, num ) {
    if ( !arr.includes( num ) ) {
        arr.push( num );
    }
    return arr
}

console.log( addNumtoArr(number, 8) );

// Create a function that takes an array and returns a new array in which the elements are sorted in ascending order. 
// The function should also remove the largest element from the array. (sort can be used)

let randomArr = [ 56, 2, 15, 48, 147, 6, 17 ]; 

function sortAndDel ( arr ) {
    arr.sort( ( present, next ) => present - next );
    arr.pop();
    return arr;
}

sortAndDel( randomArr );

// Create a function that accepts an array and a number.
// The function should add this number to the beginning of the array and return the updated array.

function addElemToStart ( arr, num ) {
    arr.unshift(num);
    return arr;
}

console.log( addElemToStart( randomArr, 222 ) )


// Create a function that takes an array of numbers and returns the largest number in that array. (solve without sort)

let numbers = [1, 6, 55, 447, 8, 15, 69, 87, 74, 12, 48 ]

function findMax( arr ) {
    return Math.max( ...arr ) 
}

console.log( findMax( numbers ) );