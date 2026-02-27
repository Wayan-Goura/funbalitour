// Fungsi untuk memanggil komponen
function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;
            });
    });
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", includeHTML);