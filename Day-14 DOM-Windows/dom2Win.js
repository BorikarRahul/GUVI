// Checking Under the Window Object where are variable plased 

// var a = 10;


// console.log(this.window.a);

// function check(b) {
//     b = 10;
//     return b;
// }

// console.log(check());

// let x = 20;
// console.log(x);

// setTimeout(function () {
//     console.log("Hello World");
// }, 5000);



function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 5000);
    console.log("Hello World");
}
// x();


function a() {
    console.log("Hello World");
    b();
}
function b() {
    console.log("world Hello");
    a();
}
// a();

// clearTimeout(Variable of setTimeout;)

function myDate() {
    new Date();
}


// alert("Form Submitted");
// setTimeout(function () {
//     alert("We have successfully submitted");
// }, 3000)

// alert(window.location.href);


// console.log(confirm("do you understand "))

// console.log(prompt("what is your name ?"));
// console.log(prompt("what is your age ? "));

// let myName = prompt("what is your Name ? ");
// let myAge = prompt("what is your age ? ");

// alert(` Hi, ${myName} you age i123s ${myAge}`);

let num1 = parseInt(prompt("1st Number"));
let num2 = parseInt(prompt("2nd Number"));
alert(Number(num1) + Number(num2));


