class Test
{
    static a=10; // static variable
    b=20; // non-static variable

    static m1()
    {
        console.log("This is m1 static method... ");
    }

    m2()
    {
        console.log("This is non static method");
    }
}

//1) we can directly access static var and method by class name

console.log(Test.a); //10
Test.a=1000;//here i have changed the values of var a by using Test (calss name) so it will show/display the updated values that is 1000.
console.log(Test.a);//1000

console.log(Test.m1);//[Function: m1]

Test.m1();//This is m1 static method... 
//this.m2(); //TypeError: this.m2 is not a function

console.log(Test.b);//undefined
console.log(Test.m2);//undefined

//2) we can access non-static variables & methods using object

let t = new Test();

console.log(t.b); // 20
console.log(t.m2);//[Function: m2]
t.m2();//This is non static method

//Q. why do we create static variables and static methods?
//Ans. to save the memory, because if we create by using static keyword we no need to create the same variables or methods again and again, we can use them in different-2 objects easily by using class object.
// and if we are changing some values of the static var and methods it will change for all the objects
//











