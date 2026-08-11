

//const headings = document.getElementById("Title");
//const all= document.querySelectorAll("*");

//console.log(headings.textContent);

//headings.textContent="Hello world";

//all.forEach((element)=>{
//    console.log(element);
//}
//);

console.log("js file loaded");

const button=document.querySelector("#btn");
const message=document.querySelector("#para");

button.addEventListener("click",()=>{
    message.textContent="Button clicked";
});




