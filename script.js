let color1=document.getElementById("colo1");
let color2=document.getElementById("colo2");
let css=document.getElementsByTagName("h3");
let body=document.getElementById("gradient");

function setcolor(){
    body.style.background="linear-gradient(to right," +color1.value +", " +color2.value +")";;
}




color1.addEventListener("input",setcolor);
color2.addEventListener("input",setcolor);
    

