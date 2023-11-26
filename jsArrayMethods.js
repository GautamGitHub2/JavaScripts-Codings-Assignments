let fruits=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];

// toString() & join()

console.log(fruits.toString()); // all array fruit element will be comma separated:Banana,Apple,Pomogranate,Kiwi,Papaya,Orange 
console.log(fruits.join("*")); // it will join all the fruit array elements by * Banana*Apple*Pomogranate*Kiwi*Papaya*Orange

// pop(): it will remove the last element of the array

fruits=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"]; // here no need to use the let keyword since i have already used above
console.log(fruits.pop())
console.log(fruits) // [ 'Banana', 'Apple', 'Pomogranate', 'Kiwi', 'Papaya' ]

//push()

fruits=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
fruits.push("guava"); // it will add new element at the end of the array
console.log(fruits);

/*[
    'Banana',
    'Apple',
    'Pomogranate',
    'Kiwi',
    'Papaya',
    'Orange',
    'guava'
  ]
*/

let fruits1=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];

console.log(fruits1); //[ 'Banana', 'Apple', 'Pomogranate', 'Kiwi', 'Papaya', 'Orange' ]
console.log(fruits1.push("guava")); //7, it returns the length of the array
console.log(fruits1);

/*
[
  'Banana',
  'Apple',
  'Pomogranate',
  'Kiwi',
  'Papaya',
  'Orange',
  'guava'
]
*/

// shift method
//it will remove the 1st array element and shift all array elemmet to the lower index
console.log("**** shift() ****")
let fruits2=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
console.log(fruits2.shift()); //Banana
console.log(fruits2); //[ 'Apple', 'Pomogranate', 'Kiwi', 'Papaya', 'Orange' ]

//unshift() : it adds the element at the 1st place of the array and rest of the elements moved to the higher index
console.log("**** unshift() ****")
let fruits3=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
console.log(fruits3.unshift("Grape")); //7
console.log(fruits3); 

// Added the Grape in the array
/*
[
  'Grape',
  'Banana',
  'Apple',
  'Pomogranate',
  'Kiwi',
  'Papaya',
  'Orange'
]
*/ 

//Deleting elements from the array

console.log("**** deleting elements from array ****")
fruits3=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
delete fruits3[1];
console.log(fruits3); //[ 'Banana', <1 empty item>, 'Pomogranate', 'Kiwi', 'Papaya', 'Orange' ]

// concat() - joining/merging 2 or more arrays
console.log("**** concat() - joining/merging 2 or more arrays ****")

let arr1=[10,20];
let arr2=["A","B","C"];
let arr3=[10.2,true,false,'G'];

console.log(" **** arr1 & arr2 **** ");
console.log(arr1.concat(arr2));

console.log(" **** arr1 & arr3 **** ");
console.log(arr1.concat(arr3));

console.log(" **** arr2 & arr3 **** ");
console.log(arr2.concat(arr3));

//concatenate all array together

console.log(" **** Concatenate all array together arr1, arr2 & arr3 **** ");

console.log(arr1.concat(arr2,arr3));

//slice(): it will create new array by taking some piece of the previous/source array, it doesn't remove any element of the source array

console.log("******* slice() ******")

let fruits4=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
console.log(fruits4.slice(1)); // [ 'Apple', 'Pomogranate', 'Kiwi', 'Papaya', 'Orange' ] , it is ignoring 1st element of the source array fruits4 and so slice method is extracting elements and it is returing from 1st element of the array fruits4 
console.log(fruits4.slice(2)); //[ 'Pomogranate', 'Kiwi', 'Papaya', 'Orange' ]
console.log(fruits4.slice(3)); //[ 'Kiwi', 'Papaya', 'Orange' ]
console.log(fruits4); //[ 'Banana', 'Apple', 'Pomogranate', 'Kiwi', 'Papaya', 'Orange' ]

//sort()

console.log("******* sort() ******")

let fruits5=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
console.log(fruits5.sort()); // this will sort the array in alphabatical order: [ 'Apple', 'Banana', 'Kiwi', 'Orange', 'Papaya', 'Pomogranate' ]

let arr4=[10,20,30,11,21,31,41];
console.log(arr4.sort());

//reverse(): it will reverse the array and it will change the original array alse
console.log("******** reverse() *******")
let fruits6=["Banana","Apple","Pomogranate","Kiwi","Papaya","Orange"];
console.log(fruits6.reverse()); //[ 'Orange', 'Papaya', 'Kiwi', 'Pomogranate', 'Apple', 'Banana' ]
console.log(fruits6);//[ 'Orange', 'Papaya', 'Kiwi', 'Pomogranate', 'Apple', 'Banana' ] Original elements have been changed 






