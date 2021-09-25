
const app = {};

window.addEventListener('DOMContentLoaded', function() {
    app.curtain = document.querySelector('.curtain');
    app.title = document.querySelector('.title');
    app.tagline = document.querySelector('.tagline');
    app.btnContainer = document.querySelector('.inner');

    app.aboutOpenBtn = document.querySelector('#about');
    app.aboutModal = document.querySelector('.modal.about');
    app.aboutCloseBtn = document.querySelector('#aboutCloseBtn');

    app.joinOpenBtn = document.querySelector('#join');
    app.joinModal = document.querySelector('.modal.join');
    app.joinCloseBtn = document.querySelector('#joinCloseBtn');
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
    
    app.joinOpenBtn.addEventListener('click', function() {
        app.joinModal.classList.remove('hidden');
    });

    app.joinCloseBtn.addEventListener('click', function() {
        app.joinModal.classList.add('hidden');
    });
});
