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