let person= // object
{ 
    // inside this curly braces these are the properties
    
    firstName:"Gautam",
    lastName:"Kumar",
    company:"Accenture",
    age:30,
    weight:65
    
}

//Accessing Object Properties

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]); // can be written as console.log(person.age);
console.log(person["weight"]);
console.log(person["company"]);
//console.log(person.age);
//console.log(person.company); // this is also fine

//adding new properties to the existing object

person["height"]=5.5;
person.phone=12345678;

console.log(person.height);
console.log(person.phone);

// Update the existing properties of the object

person["weight"]=85;
console.log(person["weight"]);

// Remove the property from object

delete person["age"];
console.log(person.age);

// for-in loop

console.log("*********** Looping object *************")

for(let x in person)
{
    // here it will print properties name as well as values of the properties 
    //console.log(x); console.log(person[x]); console.log("|"); 

    console.log(" | " +x+ " | " +person[x]+ " | ");
    
}





