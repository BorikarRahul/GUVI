// 1.	Do the below programs in anonymous function & IIFE

// a.	Print odd numbers in an array

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a.forEach(function (n){
    if(n % 2){
        console.log(n);
    }
})

// ----------------------------------------------------------------

// b.	Convert all the strings to title caps in a string array

const b = "Good Morning! People, have a great day";

function upperCase(str){
    return str.toUpperCase();
}

console.log(upperCase(b));

// ----------------------------------------------------------------

// c.	Sum of all numbers in an array

let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const total = (arr) => {
    let sum = 0;

    arr.forEach((num) => {
        sum += num;
    })
    return sum;
}

const result = total(c);

// console.log(result, total(c));

// ----------------------------------------------------------------

// d.	Return all the prime numbers in an array

const isPrime = function(num) {
    if(num <= 1){
        return false;
    }
    let count = 0;
    if(count < 3){
        for(let i = 1; i <= num; i++ ){
            if(num % i === 0){
                count++;
            }
        }
    }
    if(count <= 2){
        return true;
    }else{
        return false;
    }
}

let numb = 5;
if(isPrime(numb)){
    console.log(`${numb} Is Prime number`);
}else{
    console.log(`${numb} Is Not a Prime Number`);
}


// ----------------------------------------------------------------

// e.	Return all the palindromes in an array

    
    let array = ["level", "deified", "Hello", "world", "racecar", "madam"];

    // console.log(array.length, array[0]);
    let arr = [];
    for(let i = 0; i < array.length; i++){

        if(string(array[i]) !== undefined){
            arr.push(array[i]);
        }
    }
    console.log(arr);


    function string(str){

        let empArray = [];

        let count = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] === str[str.length -i-1]){
                count++;
            }
        }
    
        if(count === str.length){
            return str;
        }else{
            stop;
        }
    }


// ----------------------------------------------------------------

// f.	Return median of two sorted arrays of the same size.




// ----------------------------------------------------------------

// g.	Remove duplicates from an array

    const array1 = [1, 2, 2, 3, 4, 4, 2 ,5, 6];
    let ab = [];

    let result1 = (function(arr){
        return [...new Set(arr)];
    })

    ab = result1(array1);

    console.log(ab);


    

// ----------------------------------------------------------------

// h.	Rotate an array by k times


// ----------------------------------------------------------------

// ----------------------------------------------------------------
 
 
// 2. Do the below programs in arrow functions.


// ----------------------------------------------------------------
 
// i. Print odd numbers in an array

    const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const printOddNumber = (arr) => {
        let oddNum = [];
        arr.forEach((number) => {
            
            if(number % 2 === 0){
                oddNum.push(number);
            }
            
        })
        return oddNum;
    }

    console.log(printOddNumber(array3));
// ----------------------------------------------------------------
 
// j. Convert all the strings to title caps in a string array

    const myMsg = "hello world, good evening, have a nice day";
    
    let newMyMsg = "";

    const printUpperCase = (str) =>{
        // console.log(str);
        let splitStr = str.split(" ");
        for(let i = 0; i < splitStr.length; i++){
            let firstChar = splitStr[i].charAt(0).toUpperCase();
            let secondChar = splitStr[i].slice(1);

            newMyMsg += firstChar + secondChar + " ";

        }
        console.log(newMyMsg)
    }
    printUpperCase(myMsg);


// ----------------------------------------------------------------
 
// k. Sum of all numbers in an array

    let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    let sum = 0;

    number.forEach((number) => {
        sum += number;
    });

    console.log(sum);
// ----------------------------------------------------------------
 
// l. Return all the prime numbers in an array

var ba = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

function isAPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length-1; index++) {
  if (isAPrime(ba[index])) {
      prime.push(ba[index])
  }
}

console.log(prime);

// ----------------------------------------------------------------
 
// m.  Return all the palindromes in an array

let array5 = ["level", "deified", "Hello", "world", "racecar", "madam"];

    // console.log(array.length, array[0]);
    let arr5 = [];
    for(let i = 0; i < array5.length; i++){

        if(string(array5[i]) !== undefined){
            arr5.push(array5[i]);
        }
    }
    console.log(arr5);


    function string(str){

        let empArray = [];

        let count = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] === str[str.length -i-1]){
                count++;
            }
        }
    
        if(count === str.length){
            return str;
        }else{
            stop;
        }
    }



// ----------------------------------------------------------------
 

// ----------------------------------------------------------------
 
// n. Display the asterisk pattern as shown below (No loop needed);

const pattern = `
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
`;

console.log(pattern);
// ----------------------------------------------------------------
 
// o. Write a loop that makes seven  calls to Console.log() to output the following triangle;

let a7 = 7;

let str7 = "";

for(let i = 0; i < a7; i++){
    str7 += "#";
    console.log(str7);
}


// ----------------------------------------------------------------
 
// p. write a code to count the element in the array. Don't use length property;

let countp = 0;
let arrp = [11,22,33,44,55];

arrp.forEach((num) => {
    countp++;
})  
console.log(countp);