// header menu

const headerMenu = document.querySelector('.header__menu__head');
const headerMenuBody = document.querySelector('.header__menu__body');
const headerMenuClose = document.querySelector('.header__close');

headerMenu.addEventListener('click', () => {
    headerMenu.classList.add('header__menu__head_active');
    headerMenuBody.classList.add('header__menu__body_active');
});

headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.remove('header__menu__head_active');
    headerMenuBody.classList.remove('header__menu__body_active');
});


//languages

const headerLanguages = document.querySelector(".header__languages");
const headerLanguagesHead = headerLanguages.querySelector(".header__languages__head");
const headerLanguagesBody = headerLanguages.querySelector(".header__languages__body");

headerLanguagesHead.addEventListener("click", () => {
  const isActive = headerLanguagesHead.classList.toggle("header__languages__head_active");
    
  if (isActive) {
    headerLanguagesBody.classList.add("header__languages__body_active");
  } else {
    headerLanguagesBody.classList.remove("header__languages__body_active");
  }
});

function changeCurrency(currency) {
    document.getElementById('selectedCurrency').textContent = currency;
}

//// video btn

let player;
const toggle = document.getElementById('toggle');

function onYouTubePlayerAPIReady() {
    // @ts-ignore
    player = new YT.Player('player', {
        height: '242',
        width: '345',
        videoId: 'MjLP2VTa9kU',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

const playTheVideo = () => {
    // @ts-ignore
    const playButtonAl = document.querySelector(".youtube .video__button");
    const playButton = document.querySelector(".youtube .play");
    const buttonHover = document.querySelector(".youtube .button-hover");
    const videoIframe = document.querySelector('.youtube iframe');

    if (playButton && buttonHover && videoIframe) {
        playButton.remove();
        buttonHover.remove();
        playButtonAl.remove();
        console.log('123',playButtonAl);
        // @ts-ignore
        document.querySelector(".youtube img").remove();

        // @ts-ignore
        videoIframe.setAttribute("src", "https://www.youtube.com/embed/MjLP2VTa9kU?si=6ScvJ3nQ_3Ifp0nv?autoplay=1&feature=oembed&autoplay=1");

        // @ts-ignore
        if (videoIframe.contentWindow && videoIframe.contentWindow.postMessage) {
            // @ts-ignore
            videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    }
}

