console.log('Script loaded successfully!');

// Анимация появления секций
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    const sections = document.querySelectorAll('section');
    console.log('Found sections:', sections.length);
    
    // Простая проверка видимости секций
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0);
            
            if (isVisible) {
                section.classList.add('visible');
            }
        });
    }
    
    // Проверяем при загрузке и прокрутке
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
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
    
    // Плавная прокрутка
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
    
    console.log('All event listeners attached');
});
