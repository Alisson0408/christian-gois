const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fecha o menu ao clicar em uma opção
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Atualiza automaticamente o ano do rodapé
const currentYear = new Date().getFullYear();

console.log(
    `Site Christian Góis | ${currentYear}`
);