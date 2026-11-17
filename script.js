
// MENU PARA CELULAR
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const aberto = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", aberto);
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ANIMAÇÃO AO ROLAR A PÁGINA
const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observer.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.12
});

elementos.forEach(elemento => {
    observador.observe(elemento);
});

// DESTAQUE DO MENU CONFORME A SEÇÃO
const secoes = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

const observadorSecoes = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            links.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entrada.target.id}`
                );
            });
        }
    });
}, {
    rootMargin: "-30% 0px -60% 0px"
});

secoes.forEach(secao => observadorSecoes.observe(secao));

// ANO AUTOMÁTICO
document.querySelector("#ano").textContent = new Date().getFullYear();
