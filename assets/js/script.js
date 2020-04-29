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