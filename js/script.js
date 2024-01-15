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

$(document).ready(function() {
    initPage();

    // Gestionnaire d'événements pour détecter la réaffichage de la page depuis le cache du navigateur
    $(window).on("pageshow", function(event) {
        // Vérifie si l'événement est causé par le bouton précédent
        if (event.originalEvent.persisted) {
            initPage();
        }
    });

    $("a.transition").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;

        $("main").fadeOut(250, function() {
            $("main").css("display", "none");
            $("footer").css("display", "none");
            redirectPage();
        });

    });

    $("a.transition-project").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;

        $("main").fadeOut(250, function() {
            $("main").css("display", "none");
            $("footer").css("display", "none");
            redirectPage();
        });

        $(".portfolio-items").css("transform", "scale(.7)");
    });


    function redirectPage() {
        window.location = linkLocation;
    }

    function initPage() {
        $("main").css("display", "none");
        $("footer").css("display", "block");
        $(".portfolio-items").css("transform", "scale(1)");
        $("main").fadeIn(600);
    }
});
