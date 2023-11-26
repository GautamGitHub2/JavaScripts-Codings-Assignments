class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

//here i am using class not function, so class contains the constructor its arguments(eid, ename) and variables (id, ename) 

//now here i want to add one more variable salary (sal) by using prototype method 

Employee.prototype.sal=50000;

emp1=new Employee(101,"Gautam");
console.log(emp1.eid,emp1.ename,emp1.sal);//101 Gautam 50000

emp2=new Employee(102,"Purushottam");
console.log(emp2.eid,emp2.ename,emp2.sal);//102 Purushottam 50000

//here by using the prototype we can add the function as well

Employee.prototype.display=function() // method name display
{
    console.log(this.eid,this.ename,this.sal);
}

//and after adding the function method by prototype we no need to write this long code- console.log(emp1.eid,emp1.ename,emp1.sal); everytime with help of object for this we can call the method [ e.g. here is display() method ] of the function that has been created by prototype.

emp3=new Employee(103,"Manu");
emp3.display();//103 Manu 50000

emp4=new Employee(104,"Appu");
emp4.display();//104 Appu 50000

emp5=new Employee(105,"Satyam");
emp5.display();//105 Satyam 50000

emp6=new Employee(106,"Raj");
emp6.display();//106 Raj 50000





