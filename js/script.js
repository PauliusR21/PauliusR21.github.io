// VIDEO AUTOPLAY
window.onload = function() { //executes this code after the DOM loads
    //--- this is the selector element. Feel free to change this if you don't want all video objects targeted.
   const vids =  document.getElementsByClassName('autoplay');
 
    //--- Now we loop over all of the selected elements and add event listeners
   for (let i = 0; i < vids.length; i++) {
     vids[i].addEventListener( `mouseover`, function(e) { 
       vids[i].play()
     })
     vids[i].addEventListener( `mouseout`, function(e) {
       vids[i].pause()
     })
   }
 }
//  NAV
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// loading

var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
