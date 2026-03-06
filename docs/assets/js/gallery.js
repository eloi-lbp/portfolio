document.addEventListener("click", e => {
  const card = e.target.closest(".img-card");
  if (!card) return;

  const img = card.querySelector("img");
  const caption = card.querySelector(".img-caption").textContent;

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxPdf = document.getElementById("lightbox-pdf"); // 🔥 ajouté
  const lightboxCaption = document.getElementById("lightbox-caption");

  const pdf = card.dataset.pdf; // 🔥 détecte si un PDF est associé

  lightbox.classList.add("active");
  lightboxCaption.textContent = caption;

  if (pdf) {
    // 🔥 Affichage PDF
    lightboxImg.style.display = "none";
    lightboxPdf.style.display = "block";
    lightboxPdf.src = pdf;
  } else {
    // 🔥 Affichage image
    lightboxPdf.style.display = "none";
    lightboxImg.style.display = "block";
    lightboxImg.src = img.src;
  }
});

// 🔥 Fermeture lightbox
document.getElementById("lightbox").addEventListener("click", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxPdf = document.getElementById("lightbox-pdf");

  lightbox.classList.remove("active");
  lightboxPdf.src = ""; // reset PDF pour éviter qu'il continue de tourner
});

// Fonction existante
function copyMail() {
  navigator.clipboard.writeText("eloi.leb04@gmail.com");

  const msg = document.getElementById("copy-msg");
  msg.style.display = "inline";
  setTimeout(() => msg.style.display = "none", 1500);
}