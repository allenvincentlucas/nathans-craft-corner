/* ==========================================================================
   Nathan's Craft Corner — share buttons
   Renders into any element with id="share-bar". Facebook and X open a
   real share dialog. Instagram has no public "share this link" web
   endpoint, so its button copies the link instead (the standard
   workaround — paste into a bio, story, or DM).
   ========================================================================== */

(function () {
  var ICONS = {
    facebook:
      '<svg viewBox="0 0 24 24" fill="none"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/></svg>',
    x:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>'
  };

  document.addEventListener("DOMContentLoaded", function () {
    var mount = document.getElementById("share-bar");
    if (!mount) return;

    var pageUrl = window.location.href;
    var pageTitle = document.title;

    mount.innerHTML =
      '<span class="share-label">Share:</span>' +
      '<a href="#" class="share-btn" data-share="facebook" aria-label="Share on Facebook">' + ICONS.facebook + "</a>" +
      '<a href="#" class="share-btn" data-share="x" aria-label="Share on X">' + ICONS.x + "</a>" +
      '<button type="button" class="share-btn" data-share="instagram" aria-label="Copy link for Instagram">' + ICONS.instagram + "</button>" +
      '<span class="share-copied-msg">Link copied!</span>';

    mount.querySelector('[data-share="facebook"]').addEventListener("click", function (e) {
      e.preventDefault();
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl),
        "_blank",
        "width=600,height=520,noopener,noreferrer"
      );
    });

    mount.querySelector('[data-share="x"]').addEventListener("click", function (e) {
      e.preventDefault();
      window.open(
        "https://twitter.com/intent/tweet?url=" + encodeURIComponent(pageUrl) + "&text=" + encodeURIComponent(pageTitle),
        "_blank",
        "width=600,height=520,noopener,noreferrer"
      );
    });

    mount.querySelector('[data-share="instagram"]').addEventListener("click", function () {
      var msg = mount.querySelector(".share-copied-msg");
      function showCopied() {
        msg.classList.add("show");
        setTimeout(function () { msg.classList.remove("show"); }, 2200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pageUrl).then(showCopied, function () {
          window.prompt("Copy this link:", pageUrl);
        });
      } else {
        window.prompt("Copy this link:", pageUrl);
      }
    });
  });
})();
