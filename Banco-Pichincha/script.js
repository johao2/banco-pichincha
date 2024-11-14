// Función para activar el menú
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show-menu');
}

// Función para manejar el cambio de imágenes en el carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) currentSlide = totalSlides - 1;  // Si es menor que 0, va al final
    else if (index >= totalSlides) currentSlide = 0;  // Si es mayor al total, va al inicio
    else currentSlide = index;

    // Ocultar todas las imágenes
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? "block" : "none";
    });
}

// Flechas de navegación del carrusel de imágenes
document.querySelector(".carousel-control-left").addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

document.querySelector(".carousel-control-right").addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

// Inicializar carrusel de imágenes
showSlide(currentSlide);


// Función para mover el carrusel de "Soluciones en Línea"
let currentSolutionIndex = 0;
const solutionSlides = document.querySelectorAll(".soluciones-en-linea .carousel-item");
const totalSolutionSlides = solutionSlides.length;

function moveCarouselSoluciones(direction) {
    currentSolutionIndex += direction;

    // Asegura que el índice se mantenga dentro del rango cíclico
    if (currentSolutionIndex < 0) currentSolutionIndex = totalSolutionSlides - 1;
    if (currentSolutionIndex >= totalSolutionSlides) currentSolutionIndex = 0;

    const offset = -(currentSolutionIndex * 20); // Cada item ocupa el 20% de la pantalla
    document.querySelector(".soluciones-en-linea .carousel-items").style.transform = `translateX(${offset}%)`;
}

// Flechas de navegación del carrusel de soluciones en línea
document.querySelector(".soluciones-en-linea .carousel-control-left").addEventListener("click", () => {
    moveCarouselSoluciones(-1); // Mover a la izquierda
});

document.querySelector(".soluciones-en-linea .carousel-control-right").addEventListener("click", () => {
    moveCarouselSoluciones(1); // Mover a la derecha
});

// Función para mover el carrusel de "Consultas Rápidas"
let currentConsultasSlide = 0;
const consultaSlides = document.querySelectorAll(".consultas-rapidas .carrusel-slide");
const totalConsultaSlides = consultaSlides.length;

function moveCarouselConsultas(direction) {
    currentConsultasSlide += direction;

    // Asegura que el índice se mantenga dentro del rango cíclico
    if (currentConsultasSlide < 0) currentConsultasSlide = totalConsultaSlides - 1;
    if (currentConsultasSlide >= totalConsultaSlides) currentConsultasSlide = 0;

    const offset = -(currentConsultasSlide * 100); // Cada slide ocupa el 100% del contenedor
    document.querySelector(".consultas-rapidas .carrusel-contenido").style.transform = `translateX(${offset}%)`;
}

// Flechas de navegación del carrusel de consultas rápidas
document.querySelector(".consultas-rapidas .flecha.izquierda").addEventListener("click", () => {
    moveCarouselConsultas(-1); // Mover a la izquierda
});

document.querySelector(".consultas-rapidas .flecha.derecha").addEventListener("click", () => {
    moveCarouselConsultas(1); // Mover a la derecha
});

// Inicializar carrusel de consultas rápidas
moveCarouselConsultas(currentConsultasSlide);
