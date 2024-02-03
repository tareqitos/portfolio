window.onscroll = function () {
  ShowNavButtons()
}


document.addEventListener('DOMContentLoaded', function () {
    const zooming = new Zooming()
    zooming.listen('img')
    
    zooming.config({
        scaleBase: .5
      })
    zooming.config({
        bgOpacity: .8
      })
  })


function ShowNavButtons () {
  const nav = document.querySelector('.project-nav')
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (nav == null) {
    return
  }

  if (document.documentElement.scrollTop > 300) {
    if (width > 1024) {
      setTimeout(() => {
        nav.style.opacity = 1
      }, 10)
      nav.style.display = 'inherit'
    }
  }

  if (document.documentElement.scrollTop < 150) {
    setTimeout(() => {
      nav.style.display = 'none'
    }, 200)
    nav.style.opacity = 0
  }
}

function playPauseVideo () {
  let videos = document.querySelectorAll('video')
  videos.forEach(video => {
    video.muted = true

    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0.2) {
            // Video is at least 20% visible
            if (video.paused) {
              video.play()
            }
          } else {
            // Video is less than 20% visible
            if (!video.paused) {
              video.pause()
            }
          }
        })
      },
      { threshold: [0, 0.2] } // Added 0 threshold to handle edge cases
    )

    observer.observe(video)

    // Pause the video when it's not in the viewport
    video.addEventListener('pause', () => {
      video.currentTime = 0 // Rewind the video to the beginning when paused
    })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  playPauseVideo()
})

$(document).ready(function () {
  initPage()

  // Gestionnaire d'événements pour détecter la réaffichage de la page depuis le cache du navigateur
  $(window).on('pageshow', function (event) {
    // Vérifie si l'événement est causé par le bouton précédent
    if (event.originalEvent.persisted) {
      initPage()
    }
  })

  $('a.transition').click(function (event) {
    event.preventDefault()
    linkLocation = this.href

    $('main').fadeOut(250, function () {
      $('main').css('display', 'none')
      $('footer').css('display', 'none')
      redirectPage()
    })
  })

  $('a.transition-project').click(function (event) {
    event.preventDefault()
    linkLocation = this.href

    $('main').fadeOut(250, function () {
      $('main').css('display', 'none')
      $('footer').css('display', 'none')
      redirectPage()
    })

    $('.portfolio-items').css('transform', 'scale(.7)')
  })

  function redirectPage () {
    window.location = linkLocation
  }

  function initPage () {
    $('main').css('display', 'none')
    $('footer').css('display', 'block')
    $('.portfolio-items').css('transform', 'scale(1)')
    $('main').fadeIn(600)
  }
})
