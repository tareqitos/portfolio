window.onscroll = function () {
    ShowNavButtons();
}

function ShowNavButtons() {
    const nav = document.querySelector(".project-nav");
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (nav == null) {
        return
    }

    if (document.documentElement.scrollTop > 300) {
        if (width > 1024) {
            setTimeout(() => {
                nav.style.opacity = 1
            }, 10)
            nav.style.display = "inherit"
        } 
    } 

    if (document.documentElement.scrollTop < 150) {
        setTimeout(() => {
            nav.style.display = "none"
        }, 200)
        nav.style.opacity = 0
    }

}


/*window.transitionToPage = function(href) {
    document.querySelector('main').style.opacity = 0;
    document.querySelector('main').style.transform = "translateY(-100px)";
    setTimeout(function (){
        window.location.href = href;
    },1000);
};

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('main').style.opacity = 1;
    document.querySelector('main').style.transform = "translateY(0px)";
});
*/

$(document).ready(function() {
    $(".portfolio-items").css("transform", "scale(1)");
    $("main").fadeIn(350);

    $("a.transition").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;

        $(".portfolio-items").css("transform", "scale(.7)");
        $("main").fadeOut(150, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});

