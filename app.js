let btn = document.querySelector("button");
let mainDIV = document.querySelector("div");
let bod = document.getElementsByTagName("body")
 
 
 
 
function g() {
 btn.classList = "light"
 if(btn.classList == "light"){
  btn.textContent = "light mood";
  document.body.style.backgroundColor = "black"
  document.querySelector("p").style.color = "white"


 }
 else{
  btn.textContent = "dark mood";
  document.body.style.backgroundColor = "white"
  document.querySelector("p").style.color = "black"
 }
    
    
 
} 


