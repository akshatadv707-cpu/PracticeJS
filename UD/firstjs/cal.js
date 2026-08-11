let result=0;
            
             const input1=document.querySelector("#nameInput1");
             const input2=document.querySelector("#nameInput2");
             const output=document.querySelector("#res");
             const add=document.getElementById("add");
             const sub=document.getElementById("sub");
             const mul=document.getElementById("mul");
             const div=document.getElementById("div");
             const mod=document.getElementById("mod");

            

            add.addEventListener("click",()=>
                {
                const num1=Number(input1.value);
                const num2=Number(input2.value);

                if(input1.value.trim() ==="" || Number.isNaN(num1) && 
                input2.value.trim() ==="" || Number.isNaN(num2))
                { 
                    res.textContent="enter valid numbers";
                }else{  
                    result=num1+num2;  
                    //result=input1.value + input2.value;           
                    res.textContent=result;  
                }
                });

                sub.addEventListener("click",()=>
                {
                    const num1=Number(input1.value);
                    const num2=Number(input2.value);

                if(input1.value.trim() ==="" || Number.isNaN(num1) && 
                input2.value.trim() ==="" || Number.isNaN(num2) )
                { 
                    res.textContent="enter valid numbers";
                }else{  
                    result=num1-num2;             
                    res.textContent=result;  
                }
                });

                div.addEventListener("click",()=>
                {
                    const num1=Number(input1.value);
                    const num2=Number(input2.value);

                if(input1.value.trim() ==="" || Number.isNaN(num1) && 
                input2.value.trim() ==="" || Number.isNaN(num2) )
                { 
                    res.textContent="enter valid numbers";
                }else{  
                    result=num1/num2;             
                    res.textContent=result;  
                }
                });

                mul.addEventListener("click",()=>
                {
                    const num1=Number(input1.value);
                    const num2=Number(input2.value);

                if(input1.value.trim() ==="" || Number.isNaN(num1) && 
                input2.value.trim() ==="" || Number.isNaN(num2) )
                { 
                    res.textContent="enter valid numbers";
                }else{  
                    result=num1*num2;             
                    res.textContent=result;  
                }
                });

                mod.addEventListener("click",()=>
                {
                    const num1=Number(input1.value);
                    const num2=Number(input2.value);

                if(input1.value.trim() ==="" || Number.isNaN(num1) && 
                input2.value.trim() ==="" || Number.isNaN(num2) )
                { 
                    res.textContent="enter valid numbers";
                }else{  
                    result=num1%num2;             
                    res.textContent=result;  
                }
                });