/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let header =document.querySelector('header'); header.classList.toggle('sticky',
window.screenY > 100);

 //typed js
 var options = {
  strings: [
      '“I am neither especially clever nor especially gifted. I am only very, very curious.” Albert Einstein', 
      'Call me uptight but its either working or failing, there is no in between.',
      'Am Versed.'
  ],
  typeSpeed: 20,
  loop: true,
  loopCount: Infinity,
  typeSpeed: 50,
  backDelay: 5000,


};
var typed = new Typed('#multiple-text', options);