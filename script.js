

const btn = document.getElementById("backToTop");

window.addEventListener('scroll', function() {
   
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observerOptions = {
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {     
            entry.target.classList.add('show-section');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden-section');
hiddenElements.forEach((el) => observer.observe(el));
