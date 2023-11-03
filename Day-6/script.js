// class = what is classes in JS
// class house1{
//     constructor(brandname, color){
//         this.brandname = brandname
//         this.color = color
//     }
// }

// Creating an object

// const h1 = new house1 (brandname);
// const h2 = new house1 (color);

// geter and setter


// getter => get value of an object
// setter => set value of an object

// class Student{
//     constructor(name){
//         this.name = name
//     }
//     get studentName(){
//         return this.name
//     }
//     set studentName(n1){
//         this.name = n1
//     }
// }

// let Student1 = new Student("Jack");
// console.log(Student1.name);
// console.log(className.property);

// Object.(geeter/setter Method) = "new name";

// Student1.studentName = "John";
// console.log(Student1.name);


// OOps{ concept of Object {everything we use in JS is oBject} }
// OOPS is vImp in JAVA, C language not in JavaScript


// Inharitance  Methods
// ?????? Understand it after the class using internet or Previous Guvi Classes

// Encapsulation = > when you want to secure properties and methods like you want to expose the properties to another class we use public and private keywords to protect or to expose

//  Hince Development = what is the contect (abstaction) 

// abstraction => represent information that are relevant to problem statement || context

// Polymorphism = > having same methods in parent and child. but refering to when we have a parent methods in child 


// polymorphism is applied to the method only 

// Prototype = > Adding a new Propeties  
// syntax => constructorfunctionName.prototype.prooerty/key = "value";

student.prototype.gender = "male";


student.prototype.welcome = function(){
    console.log("Hello I am ${this.name}");
}





