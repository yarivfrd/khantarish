
const app = {};

window.addEventListener('DOMContentLoaded', function() {
    app.curtain = document.querySelector('.curtain');
    app.title = document.querySelector('.title');
    app.tagline = document.querySelector('.tagline');
    app.btnContainer = document.querySelector('.inner');    
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
});
