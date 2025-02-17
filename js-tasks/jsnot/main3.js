const click = document.getElementById("click");
const save = document.getElementById("save");
const signin = document.getElementById("signin");

 click.addEventListener("click",function(){
    document.body.style.backgroundColor="red";
 })

 save.addEventListener("click",function(){
    document.body.style.backgroundColor="green";
 })

 signin.addEventListener("click",function(){
    document.body.style.backgroundColor="blue"
 })
