
// ===== HITT LABB WEBSITE JS =====

document.addEventListener('DOMContentLoaded', () => {

    // ===== NAV SCROLL EFFECT =====
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.style.background = 'rgba(10,10,10,0.98)';
            nav.style.borderBottomColor = 'rgba(201,168,76,0.25)';
        } else {
            nav.style.background = 'rgba(10,10,10,0.85)';
            nav.style.borderBottomColor = 'rgba(201,168,76,0.15)';
        }
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]'). forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ===== FADE IN ON SCROLL =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const fadeEls = document.querySelectorAll(
        '.beat-card, .license-card, .stat, .pack-img, .about-img, .contact-method'  
    );
    fadeEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== BEAT CARD HOVER SOUND PREVIEW =====
    // Future: Add audio preview on hover
    // const beatCards = document.querySelectorAll('.beat-card');
    // beatCards.forEach(card => { ... });

    console.log('🎵 Hitt Labb website loaded. If it hits — it came from Hitt Labb.');
});
