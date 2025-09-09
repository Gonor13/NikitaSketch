// script.js для NikitaSketch
console.log('🚀 NikitaSketch script loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM ready - initializing animations');
    
    // Анимация появления секций при прокрутке
    function animateSections() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    }
    
    // Запускаем при загрузке и при скролле
    animateSections();
    window.addEventListener('scroll', animateSections);
    
    // Эффекты для навигации - меняем текст при наведении
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const originalText = link.textContent;
        const hoverText = link.getAttribute('data-hover');
        
        if (hoverText) {
            link.addEventListener('mouseenter', function() {
                this.textContent = hoverText;
            });
            
            link.addEventListener('mouseleave', function() {
                this.textContent = originalText;
            });
        }
    });
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('🎯 All animations and effects initialized');
});

// Fallback: если через 2 секунды секции ещё не видны, показываем их
setTimeout(() => {
    const sections = document.querySelectorAll('section:not(.visible)');
    if (sections.length > 0) {
        sections.forEach(section => {
            section.classList.add('visible');
        });
        console.log('🛡️ Fallback: all sections made visible');
    }
}, 2000);
