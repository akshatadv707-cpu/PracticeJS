const user={
  name: "Ravi",
  age: 25,
  isStudent: true
}

console.log(user);

try{
    //console.log(name);
    JSON.stringify(user);
    
}
catch(err){
    console.log(err);
}
finally{
    console.log("this is finally block");
}