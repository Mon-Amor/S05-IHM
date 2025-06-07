document.addEventListener('DOMContentLoaded', () => {
  // Submit do form
  document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Pedido de inclusão feito com sucesso!");
    window.location.href = "index.html"; // volta pra tela principal
  });

  // === TEMA CLARO/ESCURO ===
  const themeToggle = document.getElementById('theme-toggle'); // id corrigido
  let currentTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(`theme-${currentTheme}`);

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');

    document.body.classList.remove(isDark ? 'theme-dark' : 'theme-light');
    document.body.classList.add(isDark ? 'theme-light' : 'theme-dark');

    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });

  // Limitador de caracteres para textarea descrição
  const descricao = document.getElementById('descricao');
  const maxLen = 500;
  descricao.addEventListener('input', () => {
    if (descricao.value.length > maxLen) {
      descricao.value = descricao.value.substring(0, maxLen);
    }
  });
  // Função para ativar tema claro (remove a classe dark-theme)
function setLightTheme() {
  document.body.classList.remove('dark-theme');
}

// Função para ativar tema escuro (adiciona a classe dark-theme)
function setDarkTheme() {
  document.body.classList.add('dark-theme');
}

});
