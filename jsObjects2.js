let employee=
{ 
    // these are the properties of the employee object

    empname:"Gautam",
    empid:101,
    job:"Engineer",
    basicsal:500000,

    // here i have created method bonus and here calbonus() is method name which is optional
    
    bonus: function calbonus()
    {
        return((this.basicsal * 10)/100);
    }
};

console.log(employee.empname);
console.log(employee.empid);
console.log(employee.job);
console.log(employee.basicsal);

console.log(employee.bonus());



