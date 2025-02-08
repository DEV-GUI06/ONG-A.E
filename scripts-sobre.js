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

// Função para traduzir o texto
function translateText(lang) {
  const translations = {
      "pt": "A ONG Amigos da Esperança compartilha do compromisso para com imigrantes, oferecendo assistência de encaminhamento na regularização de documentos para a comunidade imigrante e promovendo projetos que visam o bem-estar e o crescimento sustentável de todos. Convidamos você a se juntar a nós nessa missão, seja como voluntário ou parceiro, para que juntos possamos construir uma sociedade mais justa, diversa e acolhedora para todos.",
      "en": "The NGO Amigos da Esperança shares the commitment to immigrants, offering assistance in document regularization for the immigrant community and promoting projects aimed at the well-being and sustainable growth of all. We invite you to join us in this mission, whether as a volunteer or partner, so that together we can build a fairer, more diverse, and welcoming society for all.",
      "fr": "L'ONG Amigos da Esperança partage l'engagement envers les immigrants, offrant une assistance dans la régularisation des documents pour la communauté immigrée et en promouvant des projets visant le bien-être et la croissance durable de tous. Nous vous invitons à nous rejoindre dans cette mission, que ce soit en tant que bénévole ou partenaire, afin que nous puissions ensemble construire une société plus juste, plus diversifiée et plus accueillante pour tous."
  };
  
  document.getElementById("text").innerText = translations[lang];
}