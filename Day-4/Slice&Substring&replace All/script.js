//? Sending HTTP Request ?

// let string = "sdlfjsdklfjf";
// console.log(string.length);

let text = "Apple, Banana, Kiwi";
console.log(text.slice(7,14)); //(beginning and end); // n to n-1 // O/P = Banana
console.log(text.slice(7)); // n to length-1 // O/P = Banana, Kiwi
console.log(text.slice(-12)); // It will count from the back // O/P = Banana, Kiwi
console.log(text.length); //O/P = 20
console.log(text.slice(-14, -5)); // It will count from the back // O/P = Banana,


// Substring
// Properties Substring we cannot use negative index but it's similar to slice
console.log(text.substring(5)); // Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.


console.log(text.slice(-1,5));//The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.

let smallString = "Hello";

console.log(smallString.slice(-5,-1));   // n-1 to n   // Adjust for negative notation
console.log(smallString.substring(-5));  // n to n-1   // if the singel notation in substring it will show the whole string otherwise it will work for only positive number start with 0 or upper value
console.log(text.substring(7));

console.log(text.replace("Banana", "Mango"));   // Most usefull method
console.log(text.replaceAll("Banana", "Mango")); // Most Usefull method
console.log(smallString.toUpperCase);