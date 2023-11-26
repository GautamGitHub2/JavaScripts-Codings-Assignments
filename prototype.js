function student()
{
    this.name="Gautam";
    this.gender="male";
}

student.prototype.age=35;

stu1=new student();

console.log(stu1.name);//Gautam
console.log(stu1.gender);//male

// now here in student function only 2 variables i have mentioned name & gender but i want to access the 'age' of the student as well. so for this i can access with the stu1 object.

stu1.age=35; // here explicitly adding age variable by stu1 object

console.log(stu1.name,stu1.gender,stu1.age); //Gautam male 35

stu2=new student();
console.log(stu2.name,stu2.gender,stu2.age); //Gautam male undefined

//here output is undefined because age was defined for stu1 object not for the stu2 object so stu2 doesn't know about the age.

//so for this the age will be accessing for all the object stu1 and stu2 we should find the solution/ way, then prototype comes to the picture.
//and this prototype will be placed below the function student. student.prototype.age=35; so now the age will be accessible for all the objects stu1 & stu2


//console.log(stu2.name,stu2.gender,stu2.age);//Gautam male 35










