document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.before-after-container').forEach(container => {
        let slider = container.querySelector('.slider');
        let afterImageWrapper = container.querySelector('.after-image-wrapper');
        let isDragging = false;

        function moveSlider(event) {
            let containerRect = container.getBoundingClientRect();
            let xPos = event.clientX - containerRect.left;
            let width = Math.min(Math.max(xPos, 0), containerRect.width);
            afterImageWrapper.style.width = width + 'px';
            slider.style.left = width + 'px';
        }

        slider.addEventListener('mousedown', function() {
            isDragging = true;
        });

        document.addEventListener('mousemove', function(event) {
            if (isDragging) {
                moveSlider(event);
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });

        // Érintőképernyős támogatás
        slider.addEventListener('touchstart', function() {
            isDragging = true;
        });

        document.addEventListener('touchmove', function(event) {
            if (isDragging) {
                moveSlider(event.touches[0]);
            }
        });

        document.addEventListener('touchend', function() {
            isDragging = false;
        });
    });
});

// Az ikon és a menü listák
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

// Ha rákattintunk a hamburger menü ikonra, nyitja/zárja a menüt
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuIcon.classList.toggle('open');
});

// Bezárja a menüt, ha egy menüpontra kattintunk
const navItems = document.querySelectorAll('.nav-list li a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('open');
        menuIcon.classList.remove('open');
    });
});
