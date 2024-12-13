document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("[data-section]");
  const sideLinks = document.querySelectorAll(".side-link");
  const sections = document.querySelectorAll(".section");

  // Menangani klik pada navbar
  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
    

      // Hapus class "active" dari semua link di navbar
      menuLinks.forEach(link => link.classList.remove("active"));

      // Tambahkan class "active" pada link yang diklik
      this.classList.add("active");

      // Sembunyikan semua konten
      sections.forEach(section => section.classList.remove("active-section"));

      // Tampilkan konten berdasarkan data-section
      const sectionId = this.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active-section");
    });
  });

  // Menangani klik pada sidebar
  sideLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Hapus class "active" dari semua link di sidebar
      sideLinks.forEach(link => link.classList.remove("activeSide"));

      // Tambahkan class "active" pada link yang diklik
      this.classList.add("activeSide");

      // Sembunyikan semua konten
      sections.forEach(section => section.classList.remove("active-section"));

      // Tampilkan konten berdasarkan side-section
      const sectionId = this.getAttribute("side-section");
      document.getElementById(sectionId).classList.add("active-section");
    });
  });
});
