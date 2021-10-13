
const app = {};
const isPhone = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

window.addEventListener('DOMContentLoaded', function () {
    app.curtain = document.querySelector('.curtain');
    app.qrCurtain = document.querySelector('.qr-curtain');
    app.title = document.querySelector('.title');
    app.tagline = document.querySelector('.tagline');
    app.btnContainer = document.querySelector('.inner');
    app.aboutOpenBtn = document.querySelector('#about');
    app.aboutModal = document.querySelector('.modal.about');
    app.aboutCloseBtn = document.querySelector('#aboutCloseBtn');
    app.joinOpenBtn = document.querySelector('#join');
    app.joinModal = document.querySelector('.modal.join');
    app.joinNotCoolBtn = document.querySelector('.not-cool');
});

window.addEventListener('load', function () {

    app.curtain.classList.add('hidden');
    
    if (!isPhone) {
        app.qrCurtain.classList.add('shown')
    } else {
        app.qrCurtain.remove();
    };

    app.curtain.addEventListener('transitionend', function () {
        app.curtain.remove();
        app.title.classList.add('visible');
        app.tagline.classList.add('visible');
    });

    app.tagline.addEventListener('transitionend', function () {
        app.btnContainer.classList.add('visible');
    });

    app.aboutOpenBtn.addEventListener('click', function () {
        app.aboutModal.classList.remove('hidden');
    });

    app.aboutCloseBtn.addEventListener('click', function () {
        app.aboutModal.classList.add('hidden');
    });

    app.joinOpenBtn.addEventListener('click', function () {
        app.joinModal.classList.remove('hidden');
    });

    app.joinNotCoolBtn.addEventListener('click', function () {
        app.joinModal.classList.add('hidden');
    });
});
