class Student
{
    setDetails() //Method-1 for 1st Student
    {
        //Creating local variable, so for accessing these local variable we need to access them by this keyword, and by applying this keyword these will be belong to the class Student
        this.sid=101;
        this.sname="Gautam";
        this.grade="A";
    }

    setDetails1() //Method-2 for 2nd Student
    {
        this.sid=102;
        this.sname="Raj";
        this.grade="B";
    }

    setDetails2() // Method-3 for 3rd Student
    {
        this.sid=103;
        this.sname="Nitoo";
        this.grade="A+";
    }

    setDetails3(sid,sname,grade) // Method-4 for 4th Student; here inside this method arguments sid,sname or grade can be same variable name or different
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    setDetails4(sid,sname,grade) // Method-5 for 5th Student
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    constructor(sid,sname,grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}

// Creating Object now

let stu=new Student();

stu.setDetails()// calling the method with help of the object
stu.display();//101 Gautam A

stu.setDetails1()
stu.display();//102 Raj B

stu.setDetails2()
stu.display();//103 Nitoo A+

stu.setDetails3(104,"Purushottam","A++");
stu.display();//104 Purushottam A++

stu.setDetails4(105,"Manu","A++");
stu.display();//105 Manu A++

// Creating Constructor now
// Constructor is also like method but constructor is used only for initializing the data, and constructor can also take arguments but only used for initialization.
//when we create an object constructor will automatically invoke, no need to invoke with the help of object 

//this object is used for constructor

let stu1=new Student(106,"Appu","A+");
stu1.display();//106 Appu A+

let stu2=new Student(107,"Satyam","B+");
stu2.display();//107 Satyam B+

let stu3=new Student(107,"Pari","A+");
stu3.display();//107 Pari A+

let stu4=new Student(108,"Futty","B++");
stu4.display();//108 Futty B++