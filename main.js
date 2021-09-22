
const app = {};

window.addEventListener('DOMContentLoaded', function() {
    app.curtain = document.querySelector('.curtain');
    app.title = document.querySelector('.title');
    app.tagline = document.querySelector('.tagline');
    app.btnContainer = document.querySelector('.inner');

    app.aboutOpenBtn = document.querySelector('#about');
    app.aboutCloseBtn = document.querySelector('#aboutCloseBtn');
    app.aboutModal = document.querySelector('.about-modal');
});

window.addEventListener('load', function() {
    app.curtain.classList.add('hidden');

    app.curtain.addEventListener('transitionend', function(e) {
        app.curtain.remove();
        app.title.classList.add('visible');
        app.tagline.classList.add('visible');
    });

    app.tagline.addEventListener('transitionend', function(e) {
        app.btnContainer.classList.add('visible');
    });

    app.aboutOpenBtn.addEventListener('click', function() {
        app.aboutModal.classList.remove('hidden');
    });

    app.aboutCloseBtn.addEventListener('click', function() {
        app.aboutModal.classList.add('hidden');
    });
});
