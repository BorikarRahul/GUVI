//  Map =>  Transform the data || used to iterate an array

//  


var arr = [1, 2, 3, 4, 5];

// function double(n){
//     return n * 2;
// }

// const output = arr.map(double);

// console.log(output); // [2, 4, 6, 8, 10]


const output = arr.map((n) => n * 2);
console.log(output) // [2, 4, 6, 8, 10]

const result = arr.map((item) => { return `<p>${item}</p>`; });
console.log(result); //['<p>1</p>', '<p>2</p>', '<p>3</p>', '<p>4</p>', '<p>5</p>']

const str = arr.map((x) => x.toString(2));
console.log(str); //['1', '10', '11', '100', '101']
