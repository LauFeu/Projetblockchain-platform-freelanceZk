document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Mode Clair";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      darkModeToggle.textContent = "Mode Sombre";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  });

  // Fonction d'horodatage
  function afficherHorodatage() {
    const maintenant = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const horodatage = maintenant.toLocaleDateString("fr-FR", options);
    document.getElementById("horodatage").textContent = horodatage;
  }

  // Mise à jour de l'horodatage toutes les secondes
  afficherHorodatage();
  setInterval(afficherHorodatage, 1000);
});
