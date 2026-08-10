
function fetchUser(id){
    return new Promise((resolve) => {
        setTimeout(() => resolve({id,name:'Alice'}),500);
    });
}

async function showUser(id){
    try{
        const a= await fetchUser(1);
        const b= await fetchUser(2);
        console.log(`sequential operation ${a} ${b}`);
    
    }catch(err){
        console.error(err);
    }
    
}
showUser(1);