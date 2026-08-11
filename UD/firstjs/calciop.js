            
const input1=document.querySelector("#nameInput1");
const input2=document.querySelector("#nameInput2");
const output=document.querySelector("#res");
const add=document.getElementById("add");
const sub=document.getElementById("sub");
const mul=document.getElementById("mul");
const div=document.getElementById("div");
const mod=document.getElementById("mod");

function calci(operation){

const num1=Number(input1.value);
const num2=Number(input2.value);


const invalid = 
    input1.value.trim() ==="" || Number.isNaN(num1) && 
    input2.value.trim() ==="" || Number.isNaN(num2);

if(invalid){
    output.textContent= "enter valid numbers";
    return;
}

if ((operation === "/" || operation === "%") && num2 === 0) {
      output.textContent = "Cannot divide by zero";
      return;
    }

let result=0;
 if(operation ==="+") result=num1+num2;
 if(operation ==="-") result=num1-num2;
 if(operation ==="/") result=num1/num2;
 if(operation ==="*") result=num1*num2;
 if(operation ==="%") result=num1%num2;

 output.textContent=result; 

}

add.addEventListener("click",()=>calci("+"));     
sub.addEventListener("click",()=>calci("-")); 
div.addEventListener("click",()=>calci("/"));    
mul.addEventListener("click",()=>calci("*"));    
mod.addEventListener("click",()=>calci("%"));    


