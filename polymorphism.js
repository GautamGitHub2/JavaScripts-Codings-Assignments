class Shape
{
    draw()
    {
        return "I am generic shape"
    }
}

class Square extends Shape
{
 draw()
 {
    return "I am Square";
 }   

}
class Circle extends Shape
{
    draw()
    {
        return "I am Circle";
    }
}

let s=new Shape();
console.log(s.draw());//I am generic shape

s=new Square();
console.log(s.draw());//I am Square

s=new Circle();
console.log(s.draw());//I am Circle

// Other Example of Polymorphism

// Polymorphism: here one main class inside that one main method and start extending main class in sub-class and start using method of main class in sub-classes
// here Same method and same object in different forms   

console.log("Polymorphism Example: Banking Example")

class Bank
{
    BankName()
    {
        return "I am Bank "
    }
}

class ICICI extends Bank
{
    BankName()
    {
        return "I am ICICI Bank "
    }

}

class SBI extends Bank
{
    BankName()
    {
        return "I am SBI Bank "
    }

}

class PNB extends Bank
{
    BankName()
    {
        return "I am PNB Bank "
    }

}

class AXIS extends Bank
{
    BankName()
    {
        return "I am AXIS Bank "
    }

}

let b=new Bank();
console.log(b.BankName());//I am Bank 

b=new ICICI();
console.log(b.BankName());//I am ICICI Bank 

b=new SBI();
console.log(b.BankName());//I am SBI Bank 

b=new PNB();
console.log(b.BankName());//I am PNB Bank 

b=new AXIS();
console.log(b.BankName());//I am AXIS Bank 