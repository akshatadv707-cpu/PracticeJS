let user={
    name:"ALICE",
    age:26,
    greet(){

        return `hi , iam ${this.name}`;
    }
};

console.log(user.name,user.age,user.greet());

user.age=28;

user=1;

console.log(user);

const { name, age } = user;