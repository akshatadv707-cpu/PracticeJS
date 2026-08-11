class User{
    constructor(name)
    {
        this.name=name;
    }
    greet(){
        return `hello ${this.name}`;
    }
}

const user= new User("AKSH");

console.log(user.greet());