data = '{"name":"Gautam", "empID": "E232", "age": 30, "email":"gautam123@gmail.com", "address":{"streetAddress": "ABC-32","City": "H.ganj","State": "J.Khand", "Country": "India","PINCode":822131},"phoneNumber": [{"type": "home","number": "5545 545-5456"},{"type": "fax","number": "222 234-2121"}]}'

let obj=JSON.parse(data)

console.log(obj["name"]); // Gautam
console.log(obj.name);// Gautam

console.log(obj["empID"]);//E232

console.log(obj["age"]);//30

console.log(obj["email"]);//gautam123@gmail.com

console.log(obj["address"].streetAddress);//ABC-32
console.log(obj.address.streetAddress);//ABC-32

console.log(obj.address.City);//H.ganj
console.log(obj["address"].City);//H.ganj

console.log(obj.address.State);//J.Khand
console.log(obj["address"].State);//J.Khand

console.log(obj.address.Country);//India
console.log(obj["address"].Country);//India

console.log(obj.address.PINCode);//822131
console.log(obj["address"].PINCode);//822131

console.log(obj.phoneNumber[0].type+"  "+obj.phoneNumber[0].number);//home  5545 545-5456
console.log(obj.phoneNumber[1].type+"  "+obj.phoneNumber[1].number);//fax  222 234-2121