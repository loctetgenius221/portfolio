document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Icônes SVG pour les thèmes
    const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />`;
    const sunIcon = `
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3" />
        <path d="M6.343 17.657l-.707.707m12.728-12.728l.707-.707" />
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
    `;

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Changer l'icône en fonction du thème
        if (body.classList.contains('dark-theme')) {
            themeIcon.innerHTML = sunIcon;
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.innerHTML = moonIcon;
            localStorage.setItem('theme', 'light');
        }
    });

    // Récupérer et initialiser le thème précédent
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.innerHTML = sunIcon;
    } else {
        themeIcon.innerHTML = moonIcon;
    }
});