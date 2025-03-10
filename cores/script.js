// Função para trocar o tema
function changeTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
}

// Carregar o tema salvo no localStorage
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'theme-light';
    document.body.className = savedTheme;
};
