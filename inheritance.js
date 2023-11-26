class A
{
    a=100;
    display()
    {
        console.log(this.a);
    }
}

class B extends A
{
    b=200;
    show()
    {
        console.log(this.b);
    }
}

bobj=new B();
bobj.display();//100
bobj.show();//200

// Overriding: this is the method in which if we have a method in parent class and don't want to use this method in child class by inheritance then we will use overriding concepts, in this concept we re-create the same method inside the child class.

//in inheritance what implementation inside the parent class the same implementation would be inside the child class.

//we do not change the defination of the method (means name of the method,number & type of arguments...etc) but body of the methods we can change and this process is called overriding 




