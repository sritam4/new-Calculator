let result;
let string="";

let buttons= document.querySelectorAll(".button");
let buttonArray=Array.from(buttons);
console.log(buttonArray);

buttonArray.forEach((button)=>{
    button.addEventListener("click",(b)=>{
        if(b.target.innerHTML=="="){
            // if(document.querySelector(".input").value==null){}
            string=document.querySelector(".input").value;
            string=eval(string);
            document.querySelector("#result").innerHTML= string;
        }
        else if(b.target.innerHTML=="C"){
            string="";
            result="";
            document.querySelector(".input").value=string;
            document.querySelector("#result").innerHTML= string;
        }
        // else if(b.target.innerHTML=="√"){
        // }
        else{
        
            string=string+b.target.innerHTML;
            document.querySelector(".input").value=string;
        }
    })
})

