// Take the button ID
mybutton = document.getElementById("myBtn");

// Enable only when scroll
window.onscroll = function() {scrollFunction()};

// This method is called when scroll
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Move Viewport to top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}