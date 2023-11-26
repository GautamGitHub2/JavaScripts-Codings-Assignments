//Defining Arrays in JS, there are 2 ways to define array


//let cars=["Maruti Suzuki", "Volvo", "Ferrari","BMW"]; // Array with the Square Brackets

let cars=new Array("Maruti Suzuki", "Volvo", "Ferrari","BMW", 32, 11, 'S', 'N', 32.21, true, '#@4'); // Array with small brackets

console.log(cars); // all values/ elements/ data of the array will display successfully

// Operations in JS array

console.log(cars[3]);// BMW
console.log(cars[5]); // 11
console.log(cars[7]); // N
console.log(cars[2]); // Ferrari

// change the element

cars[0]="Test"; // Change the value at 0th position
console.log(cars[0]);
console.log(cars);

// we can have objects in an array

let person1={
    name:"Gautam",
    age:30
};

let person2={
    name:"Purushottam",
    age:1
};
let myarray1=[person1,person2];

console.log(myarray1) //[ { name: 'Gautam', age: 30 }, { name: 'Purushottam', age: 1 } ]
console.log(myarray1[0])//{ name: 'Gautam', age: 30 }

let fruits=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
console.log(fruits.length);

//looping elements from array

for(let i=0; i<=fruits.length-1;i++)
{
    console.log(fruits[i]);
}

//For-of loop

console.log(" ***** For-of loop ***** ")

for(x of fruits)
{
    console.log(x)
}

// Recognize an Array - typeof

console.log(" ***** Array typeof ***** ")

console.log(typeof fruits); //object

console.log(Array.isArray(fruits)); //true





