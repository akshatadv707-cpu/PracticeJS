const user = {
    name:"alice",
    age: 10
};

function person({name,age}){
   console.log(`hi my name is ${name} and i am ${age} yeras old`);
}
person(user);

const {name,age} =user;
console.log(name);


const {name:userName}=user;
console.log(userName);

const arr =[10,20,30,40,50];
const [first,second,...remaining]=arr;
console.log(remaining);

const [one,,three]=arr;
console.log(one);
console.log(three);

const fruits = {
    first1:"apple",
    second2:"mango"
};

const {first1,second2,third3="orange"} = fruits;

console.log(first1);
console.log(second2);
console.log(third3);






