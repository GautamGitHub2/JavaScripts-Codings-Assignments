let text = '{ "employees" : [' +
'{ "empID":"101", "firstName":"Gautam", "lastName":"Kumar" },' +
'{ "empID":"102", "firstName":"Nitoo", "lastName":"Kumari" },' +
'{ "empID":"103", "firstName":"Purushottam", "lastName":"Raj" } ]}';

let obj=JSON.parse(text)

console.log(obj.employees[0].firstName+" "+obj.employees[0].lastName);//Gautam Kumar
console.log(obj.employees[1].firstName+" "+obj.employees[1].lastName);//Nitoo Kumari
console.log(obj.employees[2].firstName+" "+obj.employees[2].lastName);//Purushottam Raj