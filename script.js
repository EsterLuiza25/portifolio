
// --- Botão Voltar ao Topo ---
const btn = document.getElementById("backToTop");

window.addEventListener('scroll', function() {
    // Se rolar mais de 200px para baixo, o botão aparece
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// --- Animação de Revelação ao Rolar (Scroll Reveal) ---
const observerOptions = {
    threshold: 0.1 // Ativa quando 10% da seção está visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adiciona a classe que torna a seção visível e vibrante
            entry.target.classList.add('show-section');
        }
    });
}, observerOptions);

// Seleciona todas as seções para observar
const hiddenElements = document.querySelectorAll('.hidden-section');
hiddenElements.forEach((el) => observer.observe(el));