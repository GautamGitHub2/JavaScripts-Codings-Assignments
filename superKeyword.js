//Super keyword

//Q. what is super keyword in Java? and where & how to use super keyword?
//Ans. If parent has a constructor and child also have the same constructor with differnt arguments or same arguments like parent constructor then to call/invoke the parent class constructor from /inside the child class constructor we use 'super' keyword.  
// and this super() keyword will call the parent class constructor.

class Animal
{
    constructor(color)
    {
        this.color=color;
    }

    printColor()
    {
        console.log(this.color);
    }
}
class Dog extends Animal
{
    constructor(color,food)
    {
        super(color);
        this.food=food;

    }
    eating()
    {
        console.log("Eating:", this.food);
    }
    display()
    {
      this.printColor();  
      this.eating();
    }

}

d=new Dog("Blue","Bread");
d.display();

//Blue
//Eating: Bread
