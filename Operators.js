let x=10, y=20;

// Arithmetic operators

console.log(x+y);//30
console.log(y-x);//10
console.log(x*y);//200
console.log(x%y);//10
console.log(x/y);//0.5
console.log(y/x);//2
console.log(x**y);//100000000000000000000 it means 10 to the power 20
console.log(5**3);//125 it means 5 to the power 3

x++;

console.log(x);

y--;
console.log(y);

y=y-1;
console.log(y);

a=100;
b=50;
console.log(a);//100

a+=b;
console.log(a);// a=150

console.log(a-=b); //a=a-b; 100
console.log(a*=b); //a=a*b;5000
console.log(a/=b); //a=a/b;100
console.log(a%=b); //a=a%b;0
console.log(a+=b); //a=a+b;50

// Retaional / comparison operators
// always return a boolean value true/false

c=10; d=20;

console.log(c>d); // false
console.log(c<d); // true
console.log(c>=d); // false
console.log(c<=d); //true
console.log(c!=d); // true
console.log(c==d); //false

// Ternary operator

console.log(c<d?c:d); // 10
console.log(d>c?d:c); // 20

//Logical operators && || !

let e=true;
let f=false;
let g=true;

console.log(e && f); //false
console.log(e || f); //true
console.log(e != f); //true

console.log(e && g); //true
console.log(g || e); //true
console.log(e != g); //false

console.log(!g); //false
console.log(!f); // true
console.log(!e); //false 













































