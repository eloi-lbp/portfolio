function formation() {
    window.location.href = "/FORMATION/formation.html";
}

function expe() {
    window.location.href = "/EXPERIENCES/experiences.html";
}

function proj() {
    window.location.href = "/PROJETS/projets.html";
}

function menu_eng() {
    window.location.href = "/index_eng.html";
}

function menu() {
    window.location.href = "/index.html";
}

function cv() {
    window.open("/cv2.pdf", "_blank");
}

function coming() {
    window.location.href = "/coming_soon.html";
}


// Sélection de la zone centrale
const content = document.getElementById("content");

// Sélection des boutons de la sidebar
const buttons = document.querySelectorAll(".btn-sidebar");

// Gestion des clics pour charger un fichier externe
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const file = btn.dataset.file; // attribut data-file dans le HTML

    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur de chargement : " + response.status);
          }
          return response.text();
        })
        .then(html => {
          // Parse le HTML reçu
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          // On récupère uniquement le contenu du <main> si présent
          const mainContent = doc.querySelector("main");
          if (mainContent) {
            content.innerHTML = mainContent.innerHTML;
          } else {
            // Sinon, on insère seulement le <body> (évite les footers et <head>)
            content.innerHTML = doc.body.innerHTML;
          }
        })
        .catch(error => {
          content.innerHTML = "<p style='color:red;'>Impossible de charger le contenu.</p>";
          console.error(error);
        });
    }

    // Gestion de la classe active
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});