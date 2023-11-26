let s="welcome";

//charAt()
console.log(s.charAt(3));//c

//concat()
console.log("***** concat()*****");
console.log(s.concat(" to JS"));//welcome to JS
console.log(s.concat(" to SFDC").concat(" program"));//welcome to SFDC program

//replace
console.log("***** replace() *****");
s="welcome to my life";
console.log(s.replace("life","home"));//welcome to my home

//substring
console.log("***** substring() *****");
let s1="Welcome Gautam Kumar"

console.log(s1.substring(0,3));
console.log(s1.substring(3,7));

//tolowerCase & toUpperCase

console.log(s1.toUpperCase());
console.log(s1.toLowerCase());

// split()
let arr=s1.split(' ');

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//trim()

let s2="     Gautam          ";
console.log(s2);
console.log(s2.trim());

//Numbers

let x=102;
let y=102.7
let z=10e2; // exponential

console.log(x,y,z);

//isInteger()

x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x));//true
console.log(Number.isInteger(y));//false
console.log(Number.isInteger(z));//false

//parseInt() - converts a string into number

let s3= "1234";
console.log(typeof(s3));//string
console.log(typeof(Number.parseInt(s3)));//number

let s4= "1234.432";
console.log(typeof(s4));//string
console.log(typeof(Number.parseFloat(s4)));//number

//toString()
let n=2123;
console.log(typeof(n));//number
console.log(typeof(Number.toString(n)));//string

































