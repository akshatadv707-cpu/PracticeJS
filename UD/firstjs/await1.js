async function fetchUrl(){
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if(!response.ok)
    {
        throw  new Error(`Http error ${response.status}`);
    }

    const data= await response.json();
    console.log(data);
}catch(err){
    console.log(err.message);
    console.log("cause",err.cause);
}
}

fetchUrl();