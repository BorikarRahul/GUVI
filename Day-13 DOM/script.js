//Create a Element

const e1 = document.createElement("p");
e1.innerText = "I am a new Paragraph";
console.log(e1); //  it display under the browser console window

// Uppend to the Body / adding the tag to the body element

document.body.appendChild(e1);

// Catching the Element of tag using IDs

const e2 = document.createElement("p");
e2.innerText = "I am 2nd Paragraph";
console.log(e2); // it display under the browser console window

// uppend to the Div Tag using IDs

document.getElementById("myDIV").appendChild(e2); // it display under the div tag with IDs myDIV


//----------------------------------------------------------------

//  Set Attributes using DOM

//Anchor Tag

//  we are settubg the attributes in the anchor tag with the help of id 
document.getElementById("myAnchor").setAttribute("href", "http://www.mozilla.org/en-US/docs/");


// Using funtion we are creating the attribute 

function elu() {
    document.getElementById("myAnchor").setAttribute("href", "http://www.mozilla.org/en-US/docs");
}


let myAnchor = document.getElementById("myAnchor");
let res = myAnchor.getAttribute("target");
console.log(myAnchor);
console.log(res);


// geting the Element with the tag name 

let one = document.getElementsByTagName("p");
console.log(one); // HTMLCollection(3) [p, p, p]


let two = document.getElementsByTagName("p")[0];
console.log(two); //<p>This is an Example for createElements()</p>




let tex = document.getElementsByTagName("p")[0].innerText;
let tex1 = document.getElementsByTagName("p")[0].innerHTML;
console.log(tex)
console.log(tex1)


