		//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function myFunction(x) {
  x.classList.toggle("change");
}

// Get the button, and when the user clicks on it, execute myFunction
//document.getElementById("cont").onclick = function() {dropDown()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function dropDown() {
  document.getElementById("lis").classList.toggle("lis");
}






