let d=new Date();

console.log(d);

console.log(d.getDate());
console.log(d.getMonth()+1);
//console.log(d.getTime());// output is not coming correctly since i am using date methods here not time
console.log(d.getFullYear());

console.log(d.getDate()+":"+d.getMonth()+1+":"+d.getFullYear());

console.log(d.getHours()); // 0-23
console.log(d.getMinutes()); //0-59
console.log(d.getSeconds()); //0-59

console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());