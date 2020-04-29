/* fucntion to display navigation sidepanel menu on smaller screens */
function toggleSidePanel() {
    if ($(".sidePanel").width() === 0) {
        $(".sidePanel").width("60%");
        $('body').addClass('noScroll');
    } else {
        $(".sidePanel").width(0);
        $('body').removeClass('noScroll');
    }
}

/* function to change nav toggle icon to close button for sidepanel */
function changeIcon(icon) {
    icon.classList.toggle("change");
}

/* functions to display back to top button when user scrolls down  */

//Get the button:
topBtn = document.getElementById("topBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function(){

    $("#robusta_coffee").click(function () {
        if($(this).attr("src") === "assets/images/robusta_coffee.jpg"){
            $(this).fadeOut(300, function() {
                $(this).attr("src", "assets/images/robusta_bean.jpg");
                document.getElementById("robusta_zoom").src = "assets/images/zoom_out.png";
            }).fadeIn(300);
        }  else {
             $(this).fadeOut(300, function() {
                $(this).attr("src", "assets/images/robusta_coffee.jpg");
                document.getElementById("robusta_zoom").src = "assets/images/zoom_in.png";
             }).fadeIn(300);
        }        
    });

   $("#arabica_coffee").click(function () {
        if($(this).attr("src") === "assets/images/arabica_coffee.jpg"){
            $(this).fadeOut(300, function() {
                $(this).attr("src", "assets/images/arabica_bean.jpg");
                document.getElementById("arabica_zoom").src = "assets/images/zoom_out.png";
            }).fadeIn(300);
        }  else {
             $(this).fadeOut(300, function() {
                $(this).attr("src", "assets/images/arabica_coffee.jpg");
                document.getElementById("arabica_zoom").src = "assets/images/zoom_in.png";
             }).fadeIn(300);
        }        
    });
});