// Scroll Reveal
window.sr = ScrollReveal({ reset: true });

const sections = [".heading-2", ".about__container", ".goals__container"];

for (let i = 0; i < sections.length; i++) {
  sr.reveal(sections[i], { opacity: 0.9, duration: 2000 });
}

// Navbar

const menuIcon = document.querySelector(".navbar__menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
