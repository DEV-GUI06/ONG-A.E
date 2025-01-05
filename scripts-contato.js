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
  