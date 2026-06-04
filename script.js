const xh = document.getElementById('xhair');
const dot = document.getElementById('xhair-dot');

document.addEventListener('mousemove', e => {
    const x = e.clientX, y = e.clientY;
    xh.style.left  = x + 'px';
    xh.style.top   = y + 'px';
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
}, { passive: true });

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('xhair-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('xhair-hover'));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
});

const bgTxt = document.querySelector('.hero-bg-text');
window.addEventListener('scroll', () => {
    if (bgTxt) {
        const y = window.scrollY * 0.3;
        bgTxt.style.transform = `translate(-50%, calc(-50% + ${y}px))`;
    }
}, { passive: true });