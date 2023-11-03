// Filter 

// Syntax // var arr = [1, 2, 3, 4, 5];

// const output = arr.filter();

// console.log(output);

var arr1 = [1, 2, 3, 4, 5];

function isOdd(x){
    return x % 2
}

const output1 = arr1.filter(isOdd);

console.log(output1);

// ------------------------------------------------------

function isEven(x){
    return x % 2 === 0;
}

const output2 = arr1.filter(isEven);

console.log(output2);

// ------------------------------------------------------
                                // condition 
// var arr1 = [1, 2, 3, 4, 5];

const output3 = arr1.filter((x) => x % 2)

console.log(output3);

// ------------------------------------------------------

var arr2 = [0, 2, 0, 0, 5];

const output4 = arr2.filter((x) => x)

console.log(output4);

// ------------------------------------------------------

// Reduce  

// ------------------------------------------------------

let arr3 = [5, 1, 3, 2, 6];

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr3));

// ------------------------------------------------------

const sum = arr3.reduce(function (acc, curr){
    acc += curr;
    return acc;
    // return curr;
}, 0)

console.log(sum);


// ------------------------------------------------------

let arr4 = [5, 1, 7, 2, 6];

const max = arr4.reduce(function (max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0)
console.log(max);

 
// ------------------------------------------------------

// Array of Objects
 
// ------------------------------------------------------

const users = [
    {firstName: "Rahul", lastName: "Borikar", age: 28},
    {firstName: "Muthu", lastName: "Gawri", age: 20},
    {firstName: "Badrinath", lastName: "Nagarajan", age: 23},
    {firstName: "Harishri", lastName: "Dharmaraj", age: 20}
]

// List of full Name;

const userData = users.map((usr) => usr.firstName + " " + usr.lastName);
console.log(userData);


// Using Reduce

const userData1 = users.reduce(function (acc , curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(userData1);





// Map + filter

const userOutput = users.filter((user) => user.age > 20);
console.log(userOutput);

// (2) [{…}, {…}]
// 0
// : 
// {firstName: 'Rahul', lastName: 'Borikar', age: 28}
// 1
// : 
// {firstName: 'Badrinath', lastName: 'Nagarajan', age: 23}
// length
// : 
// 2
// [[Prototype]]
// : 
// Arraśy(0)

const userOutput1 = users.filter((user) => user.age > 20).map((usr) => usr.firstName);
console.log(userOutput);

// ['Rahul', 'Badrinath']