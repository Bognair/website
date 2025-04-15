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

// Galéria inicializálása
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-container').forEach(gallery => {
      const slides = gallery.querySelectorAll('.gallery-slide');
      let currentSlide = 0;
  
      function initGallery() {
        slides.forEach((slide, index) => {
          slide.classList.remove('active', 'prev-active');
          slide.style.transform = 'translateX(100%)';
          slide.style.opacity = '0';
          if (index === 0) {
            slide.classList.add('active');
            slide.style.transform = 'translateX(0)';
            slide.style.opacity = '1';
          }
        });
      }
  
      function showSlide(newIndex, direction) {
        if (newIndex === currentSlide) return;
  
        const outgoingSlide = slides[currentSlide];
        const incomingSlide = slides[newIndex];
  
        outgoingSlide.classList.remove('active');
        outgoingSlide.classList.add('prev-active');
        outgoingSlide.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
        outgoingSlide.style.opacity = '0';
  
        incomingSlide.classList.remove('prev-active');
        incomingSlide.classList.add('active');
        incomingSlide.style.transform = 'translateX(0)';
        incomingSlide.style.opacity = '1';
  
        currentSlide = newIndex;
      }
  
      gallery.querySelector('.prev').addEventListener('click', () => {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex, 'prev');
      });
  
      gallery.querySelector('.next').addEventListener('click', () => {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex, 'next');
      });
  
      // Kezdeti inicializálás
      initGallery();
    });
});

// Dark/Light mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        // Alapértelmezett téma beállítása a localStorage alapján
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
        themeToggle.addEventListener('click', toggleTheme);
    }
});

function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
         localStorage.setItem('theme', 'dark');
         themeToggle.textContent = "☀️";
    } else {
         localStorage.setItem('theme', 'light');
         themeToggle.textContent = "🌙";
    }
}
document.addEventListener('DOMContentLoaded', function() {
  // Ellenőrizzük, hogy van-e tárolt téma (localStorage segítségével)
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
      document.body.classList.add('dark');
  }

  // A dark/light mód váltó gomb kiválasztása
  const themeToggleButton = document.getElementById('theme-toggle');
  if (themeToggleButton) {
      themeToggleButton.addEventListener('click', function() {
          // A body dark osztályának váltása
          document.body.classList.toggle('dark');
          // Tárolás localStorage-ban
          if (document.body.classList.contains('dark')) {
              localStorage.setItem('theme', 'dark');
          } else {
              localStorage.setItem('theme', 'light');
          }
      });
  }
});