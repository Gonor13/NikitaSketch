// Анимация появления секций при скролле
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Добавляем эффект при наведении на навигационные ссылки
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const originalText = link.textContent;
        const hoverText = link.getAttribute('data-hover');
        
        link.addEventListener('mouseenter', () => {
            if (hoverText) {
                link.textContent = hoverText;
            }
        });
        
        link.addEventListener('mouseleave', () => {
            link.textContent = originalText;
        });
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});
