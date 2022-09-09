$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        item: 3,
        loop: true,
        responsive : {
            0 : {
                dots: false,
                margin: 32,
                autoWidth: true,
                loop: true,
                item: 2
            },
            601 : {
                item: 3,
                dots: false,
                margin: 40
            },
            1001 : {
                item: 3,
                margin: 48,
                dots: false,
            }
        }
    });
});

// Video

const videoBtn = document.querySelector('#video__btn')
const videoPicture = document.querySelector('.video__picture')
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video-file')

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden')
        videoWrapper.classList.remove('video-overlay')
        videoBtn.classList.add('none')
        video.play()
    } else {
        videoWrapper.classList.add('video-overlay')
        videoBtn.classList.remove('none')
        video.pause()
    }

})

//Mobile Nav

const openMobileNav = document.querySelector('#openMobileNav')
const mobileNav = document.querySelector('#mobileNav')
const closeMobileNav = document.querySelector('#closeMobileNav')

openMobileNav.onclick = function () {
    mobileNav.classList.remove('none')
    document.body.classList.add('no-scroll')
}

closeMobileNav.onclick = function () {
    mobileNav.classList.add('none')
    document.body.classList.remove('no-scroll')
}