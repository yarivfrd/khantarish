
const app = {};

window.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event');
    app.curtain = document.querySelector('.curtain');
    app.title = document.querySelector('.title');
    app.tagline = document.querySelector('.tagline');
    app.btnContainer = document.querySelector('.inner');

    app.curtain.addEventListener('transitionend', function(e) {
        app.curtain.remove();
    });
});

window.addEventListener('load', function() {
    console.log('load event');
    app.curtain.classList.add('hidden');
    app.title.classList.add('visible');
    app.tagline.classList.add('visible');
    app.btnContainer.classList.add('visible');
});
