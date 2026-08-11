

function form(user){
    if(!user.name||!user.age||!user.city)
    {
        console.log("please fill all the details");
    }
    else{
        console.log("form submitted");
        console.log("here are the details",user.name,user.age,user.city);
    }

}

 const user={"name":"Aksh","age":28,"city":"DVG"};
 form(user);