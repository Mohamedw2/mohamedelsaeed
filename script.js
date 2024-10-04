document.querySelectorAll('h1, h2, h3, p').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.5s, transform 0.5s';
    }, 200);
});

let isEnglish = true;

document.getElementById('toggle-btn').addEventListener('click', () => {
    const englishSection = document.querySelector('.english');
    const arabicSection = document.querySelector('.arabic');
    
    if (isEnglish) {
        englishSection.style.display = 'none';
        arabicSection.style.display = 'block';
    } else {
        englishSection.style.display = 'block';
        arabicSection.style.display = 'none';
    }
    
    isEnglish = !isEnglish;
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});
