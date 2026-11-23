<script>
  const logoOceanie = document.getElementById("logo-oceanie");
  let enAttenteFrame = false;

  function mettreAJourRotation() {
    if (logoOceanie) {
      // Tourne d'environ 0,25 degré par pixel défilé (ajustable selon vos préférences)
      const angle = window.scrollY * 0.25;
      logoOceanie.style.setProperty("--rotation", `${angle}deg`);
    }
    enAttenteFrame = false;
  }

  window.addEventListener("scroll", () => {
    if (!enAttenteFrame) {
      window.requestAnimationFrame(mettreAJourRotation);
      enAttenteFrame = true;
    }
  }, { passive: true });
</script>