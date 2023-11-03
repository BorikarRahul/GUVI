// Array
//Index





// -----------------------------------------------------------------------------

//Push


// ------------------------------------------------------------

// Pop

// ----------------------------------------------------------

//unshift => add an element in the start of an array;

// let city = ['delhi', 'mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkatta', 'Chandigarh'];

// console.log(city.unshift('Paris'));
// console.log(city.unshift('Dubai'));
// console.log(city);

// ---------------------------------------------------------------
// let farm = ['🐖', '🐄', '🐎', '🐐', '🐔'];
// //            0      1     2      3     4
// //           -5     -4    -3     -2    -1

// // Slice  =   Slice(Star Index, End Index) 
// console.log(farm.slice(2));
// console.log(farm.slice(0)); //['🐖', '🐄', '🐎', '🐐', '🐔']

// console.log(farm.slice(2, 4)); //['🐎', '🐐', '🐔']
// console.log(farm.slice(0, -2)); //['🐖', '🐄', '🐎']
// console.log(farm.slice(-2, -1));//['🐐']
// console.log(farm.slice(-1, -2));// [];
// console.log(farm.slice(4,2));//



//------------------------------------------------------------------------------


//Splice => Splice(StartIndex, DeleteCount, Values);


// let city = ['delhi', 'mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkatta', 'Chandigarh'];
//['delhi','mumbai','Bangalore','Chennai','Hyderabad','Kolkatta','Chandigarh'];
//    0   ,    1   ,      2  ,     3      ,  4              5          6
//   -7   ,   -6   .     -5      -4         -3           -2         -1
//console.log(city.splice(2,2)); //[Bangalore','Chennai'] Deleted 
//console.log(city); // ['delhi', 'mumbai', 'Hyderabad', 'Kolkatta', 'Chandigarh']

// console.log(city.splice(3 , 0, "pune", "paris"));
// console.log(city);
// console.log(city.splice(9 , 0, "pune", "paris"));
// console.log(city);
// console.log(city);

// console.log(city.splice(5, 2));
// console.log(city);

// console.log(city.splice(-5, 2, "paris", 4));
// console.log(city);


//----------------------------------------------------------------


// Reverse

// let city = ['delhi', 'mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkatta', 'Chandigarh'];

// var result = city.reverse() // ✅

// console.log(result); //['Chandigarh', 'Kolkatta', 'Hyderabad', 'Chennai', 'Bangalore', 'mumbai', 'delhi']

var result1 = [...city].reverse(); // ❌

console.log(result1); //['delhi', 'mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkatta', 'Chandigarh']


// ------------------------------------------------------------------
//Join
var msg = ['have', 'a', 'nice', 'day'];
var result = msg.join("-");
// console.log(result); //have-a-nice-day
// var result = msg.join("");
// console.log(result); //haveaniceday

// //---------------------------------------------------------------------
// //split
// // var gitLink = "https://github.com/BorikarRahul/GUVI.git";
// // console.log(gitLink.split("/")); // ['https:', '', 'github.com', 'BorikarRahul', 'GUVI.git']

// // console.log(gitLink.split("g"));//['https://', 'ithub.com/BorikarRahul/GUVI.', 'it']

// //----------------------------------------------------------------

// //Flat

// var number = [1, 2, 3,[ 4, 5, 6, [ 7, 8, 9, 10]]];
// var result = number.flat();
// var result0 = number.flat(0);
// var result1 = number.flat(1);
// var result2 = number.flat(2);
// var result3 = [...number];  //Spread Operator

// // console.log(number);//[1, 2, 3, Array(4)]
// console.log(result);//[1, 2, 3, Array(4)]
// console.log(result0);//[1, 2, 3, Array(4)]
// console.log(result1);//[1, 2, 3, 4, 5, 6, Array(4)]
// console.log(result2);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(result3);//[1, 2, 3, Array(4)]






//----------------------------------------------------------------

// Map  =>  Transform the data || Used to iterate an array;


var arr = [1, 2, 3, 4, 5];

function double(n){
    return n * 2;
}

const output = arr.map(double);
console.log(output);

