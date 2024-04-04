let images=document.querySelectorAll("#images");
let rock=document.querySelector(".rock");
let sic=document.querySelector(".sic");
let paper=document.querySelector(".paper");
let compscore=document.querySelector("#compscore");
let userscore=document.querySelector("#userscore");
let last=document.querySelector("#last");
let user=0;
let comp=0;
let compchose=document.querySelector(".computerchose");

let compgenerate=()=>{
    let arr=["rock","paper","sic"];
    let value=Math.floor(Math.random()*3);
    return arr[value];
    
   
}

let display=(win)=>{
    if(win===true){
        console.log("user win");
        user++;
        userscore.innerText=user;
        last.innerText="You have won";
        last.style.background="green";

    }
    else if(win===false){
        console.log("computer win");
        comp++;
        compscore.innerText=comp;
        last.innerText="Oops! Computer has won";
        last.style.background="red";
    }
}


let Play=(userv)=>{
    let compv=compgenerate();
    compchose.setAttribute("class",compv);
    if(compv===userv){
            console.log("its draw");
            last.innerText="It's a draw";
            last.style.background="grey";
    }else{
        let win=true;
        if(userv==="rock"){
          win= compv==="paper"?false :true; 
          
        }
        else if(userv==="paper"){
            win= compv==="sic"?false:true;
        }
        else if(userv==="sic"){
            win= compv==="rock"?false:true;
        }
        display(win);
    }
    
}

rock.addEventListener("click",()=>{
    let userch=rock.getAttribute("id");
    console.log("its clicked");
    Play(userch);
 } );
       
sic.addEventListener("click",()=>{
    let userch=sic.getAttribute("id");
    console.log("its clicked");
    Play(userch);
 } );
paper.addEventListener("click",()=>{
    let userch=paper.getAttribute("id");
    console.log("its clicked");
    Play(userch);
});



