var button = document.getElementById("buton");
var cpu=document.getElementById("CPU");
var disk=document.getElementById("DISK");
var memory=document.getElementById("MEMORY");
button.addEventListener("dblclick", buton);  

var slideIndex = 0;

function buton() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1; }    
  x[slideIndex-1].style.display = "block";  
  setTimeout(buton, 3000);
  cpu.style.display = "none";
  disk.style.display = "none";
  memory.style.display = "none";
 }