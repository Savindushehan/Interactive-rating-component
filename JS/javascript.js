var S1=document.getElementById("s1");
var S2=document.getElementById("s2");
var S3=document.getElementById("s3");
var S4=document.getElementById("s4");
var S5=document.getElementById("s5");
var BTN=document.getElementById("btn");
var ROW=document.getElementById("row");
var BG1=document.getElementById("background1")
var BG2=document.getElementById("background2");
var count=1;
while(count<=2){
    if(count==1){
        S1.onclick=function(){
            S1.style.backgroundColor="red";
            count++;
        }
    }
    else if(count==2){
        S1.onclick=function(){
            S1.style.backgroundColor="green";
        }
        break;
    }
    
    
    
}

BTN.onclick=function(){
    BG1.style.display="none";
    BG2.style.display="block";
}
