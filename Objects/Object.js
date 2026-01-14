let a={name:"vanshika",age:20,city:"alwar"}
console.log(a)

console.log(a.name)

a.name="tiya"
a.age=21
console.log(a)

delete a.name;
console.log(a)


console.log(Object.keys(a)) 
console.log(Object.values(a))