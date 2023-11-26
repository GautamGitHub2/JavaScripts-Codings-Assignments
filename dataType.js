console.log(c); //undefined; means before initialization of the 'c' 'var' gives the undefined

var c=6; 
console.log(c); //6

console.log(d); //ReferenceError: Cannot access 'd' before initialization 'let' gives the ReferenceError
let d=7;
console.log(d); // After the above error the compiler will not reach here

