class Student
{
    constructor()
    {
        let name,marks; // local variables
    }

    getName() //getter method
    {
        return this.name;
    }
    setName(name) //setter method
    {
        this.name=name;
    }

    getMarks() //getter method
    {
        return this.marks;
    }
    setMarks(marks) //setter method
    {
        this.marks=marks;
    }

}

let stu = new Student(); // Creating Student Object
stu.setName("Gautam"); // Accessing setter method value by class object
stu.setMarks(90); // Accessing setter method value by class object
console.log(stu.getName(),stu.getMarks());//Gautam 90


let stu1 = new Student(); 
stu1.setName("Raj"); 
stu1.setMarks(60);
console.log(stu1.getName(),stu1.getMarks()); //Raj 60

let stu2 = new Student(); 
stu2.setName("Nitoo"); 
stu2.setMarks(40);
console.log(stu2.getName(),stu2.getMarks());//Nitoo 40

let stu3 = new Student(); 
stu3.setName("Uttam"); 
stu3.setMarks(80);
console.log(stu3.getName(),stu3.getMarks());//Uttam 80

let stu4 = new Student(); 
stu4.setName("Purushottam"); 
stu4.setMarks(95);
console.log(stu4.getName(),stu4.getMarks());//Purushottam 95

let stu5 = new Student(); 
stu5.setName("Manu"); 
stu5.setMarks(100);
console.log(stu5.getName(),stu5.getMarks()); //Manu 100

let stu6 = new Student(); 
stu6.setName("Pari"); 
stu6.setMarks(75);
console.log(stu6.getName(),stu6.getMarks());//Pari 75
