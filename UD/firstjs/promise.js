function fetchUser(id){
    return new Promise((resolve) => {
        setTimeout(() => resolve({id,name:'Alice'}),500);
    });
}

fetchUser(1)
.then(user=> console.log(user.name))
.catch(err=>  console.error(err));