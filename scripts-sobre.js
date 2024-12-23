// Seleciona todos os elementos que contêm texto
const textElements = document.querySelectorAll("p, h1, h2, li");

// Botões para aumentar e diminuir texto
const decreaseButton = document.getElementById("decrease-text");
const increaseButton = document.getElementById("increase-text");

// Limites de tamanho de fonte (em pixels)
const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 32;

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
