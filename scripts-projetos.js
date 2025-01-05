// Seleciona todos os elementos que contêm texto
const textElements = document.querySelectorAll("p, h1, h2, li");

// Botões para aumentar e diminuir texto
const decreaseButton = document.getElementById("decrease-text");
const increaseButton = document.getElementById("increase-text");

// Limites de tamanho de fonte (em pixels)
const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 27;

// Função para alterar o tamanho da fonte
function adjustFontSize(factor) {
  textElements.forEach(element => {
    const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
    const newSize = currentSize + factor;

    // Aplicar limites
    if (newSize >= MIN_FONT_SIZE && newSize <= MAX_FONT_SIZE) {
      element.style.fontSize = `${newSize}px`;
    }
  });
}

// Eventos de clique nos botões
decreaseButton.addEventListener("click", () => adjustFontSize(-2));
increaseButton.addEventListener("click", () => adjustFontSize(2));


// Função para movimentar o carousel
let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Atualizar índice
  currentIndex += direction;

  // Ajustar índice para looping
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  // Mover o carousel
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}


// Eventos de clique nos botões de tema
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const sunIcon = themeToggleButton.querySelector(".sun");
  const moonIcon = themeToggleButton.querySelector(".moon");

  // Verificar tema salvo no localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    updateIcons(currentTheme === "dark-theme");
  }

  themeToggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme", !isDark);

    // Salvar tema no localStorage
    localStorage.setItem("theme", isDark ? "dark-theme" : "light-theme");

    // Atualizar ícones
    updateIcons(isDark);
  });

  function updateIcons(isDark) {
    if (isDark) {
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
    } else {
      sunIcon.style.display = "inline";
      moonIcon.style.display = "none";
    }
  }
});
