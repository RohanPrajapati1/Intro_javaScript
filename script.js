// decleraing variable by using let

// variable decleration
let a ;

// variable innitilisation
a = 14;
console.log('a = ' ,a);
// we can change value of those variable which define by let  
a= 38;
console.log('a = ', a);

let b = 24; // decleration and initilisation at a time 

console.log('a + b =' , a+b);


// decleraing variable by using const
const name = 'rohan'; 
console.log('name = ',name );
// const variable are declered and initilised at a same time 
// we can not change value of const variable 






// Datatype
// String  let name = "rohan"
// Number  let age = 25
// Boolean let a = true 
// undefined
// object

// type conversion 

// number to string and boolean
let age = 20;
console.log(String(age));   // to string => '20'
console.log(Boolean(age));  // to boolean => if number is 0 then it convert into false othewise true 


// string to number and boolean 
let name2 = "Rohan";
console.log(Number(name2));  // to number => NaN (means not a number)
console.log(Boolean(name2)); // to boolean => true only empty string (name2 = '') is convert into false otherwise true

name2 = '23';
console.log(Number(name2)); // => 23


name2= ' ';
console.log(Number(name2));  // => 0
console.log(Boolean(name2)); //  => true


name2= '';
console.log(Number(name2));  // => 0
console.log(Boolean(name2)); //  => false


// boolean to number and string
let boolean = true;
console.log(Number(boolean)) // => 1
console.log(String(boolean)) //  => 'true'




// operators 

// arithmetic operatoers
// increment and decrement is not apply in const variable

let x = 2;
let y = 3;
console.log('x**y' , x**y);  // exponetial power operator x**y (=> 8) means x to the power of y

// assigenment operator

x**= x;  // x = x**x;
console.log(x); // => 4

// comaparison operators (return true or false)

x = 5;
y = 5;
console.log(x === y); // (=> true )return true if value and type of value are same
y = String(y);
console.log(x == y); //  (=> true) bcz == check only value not type
console.log(x === y); // (=> false )
console.log(x !== y); // true


let string = '';
x = 0;
console.log(x == string);  // true
console.log(string == false);  // true


// logical operators 
// && => (4>3)&&(5<4)
// || =>  (4>3)&&(5<4)
// ! 


