// script.js
console.log('NikitaSketch script loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready - initializing animations');
    
    // Анимация появления секций
    function checkSections() {
        const sections = document.querySelectorAll('section');
        const triggerBottom = window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }
    
    // Запускаем при загрузке и скролле
    checkSections();
    window.addEventListener('scroll', checkSections);
    
    // Эффекты для навигации
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const originalText = link.textContent;
        const hoverText = link.getAttribute('data-hover');
        
        if (hoverText) {
            link.addEventListener('mouseenter', () => {
                link.textContent = hoverText;
            });
            
            link.addEventListener('mouseleave', () => {
                link.textContent = originalText;
            });
        }
    });
    
    // Плавная прокрутка к секциям
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('All animations initialized');
});

// Фallback если секции не анимируются
setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('visible');
    });
}, 1000);
