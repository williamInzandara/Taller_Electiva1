// ===============================
// MENÚ RESPONSIVE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

});


// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===============================
// VALIDACIÓN FORMULARIO
// ===============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre === "" || correo === "") {
        alert("Por favor completa los campos obligatorios.");
        return;
    }

    alert("Formulario enviado correctamente 🚀");
    formulario.reset();
});


// ===============================
// BOTÓN CTA INTERACTIVO
// ===============================

const ctaBtn = document.querySelector(".cta-btn");

ctaBtn.addEventListener("click", () => {
    alert("Bienvenido a FlowTask 🚀");
});


// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
});