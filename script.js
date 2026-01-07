document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // 1. LOGIKA FILTER KATEGORI (Kode Lama)
  // =========================================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      cards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.classList.remove("hide");
          card.style.animation = "none";
          card.offsetHeight;
          card.style.animation = "fadeIn 0.5s ease";
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // =========================================
  // 2. LOGIKA IMAGE PREVIEW MODAL (Kode Baru)
  // =========================================

  // Ambil elemen-elemen yang diperlukan
  const modal = document.getElementById("imagePreviewModal");
  const modalImg = document.getElementById("previewImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close-modal");

  // Ambil semua gambar yang ada di dalam kartu (.card-image img)
  const galleryImages = document.querySelectorAll(".card-image img");

  // Loop melalui setiap gambar dan tambahkan event listener klik
  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex"; // Ubah display jadi flex agar centering bekerja
      modalImg.src = this.src; // Set sumber gambar modal sama dengan gambar yang diklik

      // (Opsional) Mengambil judul dari kartu untuk dijadikan caption
      // Caranya: naik ke parent (.card), lalu cari h3 di dalam (.card-info)
      const cardTitle =
        this.closest(".card").querySelector(".card-info h3").innerText;
      captionText.innerHTML = cardTitle;
    });
  });

  // Fungsi untuk menutup modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener untuk tombol close (X)
  closeBtn.addEventListener("click", closeModal);

  // Event listener untuk menutup modal jika user klik di area background gelap (bukan di gambarnya)
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Event listener untuk menutup modal dengan tombol ESC di keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});
