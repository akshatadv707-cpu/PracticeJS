
let counter=0;

const message=document.getElementById("message");
const inc=document.getElementById("btn+");

inc.addEventListener("click",()=>{
    counter++;
    console.log(`Increase by ${counter}`);
    message.textContent=counter;
    
}
);

const dec=document.getElementById("btn-");
dec.addEventListener("click",()=>{
    counter--;
    console.log(`Decrease by ${counter}`);
    message.textContent=counter;
    
}
);

const reset=document.querySelector("#res");
reset.addEventListener("click",()=>{
counter=0;
console.log("Reset to 0");
message.textContent=counter;
message1.textContent="Reset to 0";

});