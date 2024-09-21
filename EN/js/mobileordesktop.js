// Fonction pour vérifier les dimensions de l'écran
function adjustBodyId() {
    const body = document.body;
    if (window.innerWidth > window.innerHeight) {
        body.id = 'desktop'; // Ajoute l'ID 'desktop' si la largeur est supérieure à la hauteur
    } else {
        body.id = 'mobile'; // Supprime l'ID si la condition n'est pas remplie
    }
}

// Appelle la fonction lors du chargement de la page
window.onload = adjustBodyId;

// Appelle la fonction lors du redimensionnement de la fenêtre
window.onresize = adjustBodyId;
