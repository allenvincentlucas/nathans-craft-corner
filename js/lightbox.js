/* ==========================================================================
   Nathan's Craft Corner — gallery lightbox
   Wires up any ".book-gallery img" so clicking it opens a full-size,
   uncropped view. Close via the X button, clicking the overlay, or Esc.
   ========================================================================== */

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var galleryImgs = document.querySelectorAll(".book-gallery img");
    if (!galleryImgs.length) return;

    var overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close full-size image">&times;</button>' +
      '<img alt="">';
    document.body.appendChild(overlay);

    var overlayImg = overlay.querySelector("img");
    var closeBtn = overlay.querySelector(".lightbox-close");

    function openLightbox(src, alt) {
      overlayImg.setAttribute("src", src);
      overlayImg.setAttribute("alt", alt || "");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    galleryImgs.forEach(function (img) {
      img.addEventListener("click", function () {
        openLightbox(img.getAttribute("src"), img.getAttribute("alt"));
      });
    });

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target === closeBtn) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  });
})();
