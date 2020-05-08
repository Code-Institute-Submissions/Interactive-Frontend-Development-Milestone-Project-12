// fucntion to display navigation sidepanel menu on smaller screens 
function toggleSidePanel() {
    if ($(".sidePanel").width() === 0) {
        $(".sidePanel").width("60%");
        $('body').addClass('noScroll');
    } else {
        $(".sidePanel").width(0);
        $('body').removeClass('noScroll');
    }
}

// function to change nav toggle icon to close button for sidepanel
function changeIcon(icon) {
    icon.classList.toggle("change");
}

// functions to display back to top button when user scrolls down 

//Get the button:
topBtn = document.getElementById("topBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


// function to send email and display an alert status if message was sent successfully or failed
function sendEmail(contactForm) {
    var service_id = "gmail";
    var template_id = "ireland_coffee_experience";
    var template_params = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailAddress.value,
        "message": contactForm.message.value
    };

    emailjs.send(service_id, template_id, template_params)
    .then(
        function(response) {
            console.log("success", response);
            //display info alert if the message was sent
            $("#message-status").html(`<div class="alert alert-info alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    Thanks for your message it's great to hear from you!
                    </div>`);
            //close info alert after 5 secs
            window.setTimeout(function () {$(".alert").alert('close')}, 5000);
        },
        function(error) {
            console.log("fail", error);
            //display warning alert if the message was not sent
            $("#message-status").html(`<div class="alert alert-warning alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    Oh no something went wrong please try again!
                    </div>`);
            //close info alert after 5 secs
            window.setTimeout(function () {$(".alert").alert('close')}, 5000);
    });
    // reset the forms field to default
    $('#contactForm').trigger("reset");
    return false;
}

$(document).ready(function(){
    // function to change the img src with fade animation when img is clicked
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

    // function to change the img src with fade animation when img is clicked
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