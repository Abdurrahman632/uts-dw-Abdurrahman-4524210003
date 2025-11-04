const inputJudul = document.querySelector('#judul');
const inputDetail = document.querySelector('#detail');
const inputRingkasan = document.querySelector('#ringkasan');
const inputGambar = document.querySelector('#url-gambar');

const previewJudul = document.querySelector('#preview-judul');
const previewDetail = document.querySelector('#preview-detail');
const previewRingkasan = document.querySelector('#preview-ringkasan');
const previewGambar = document.querySelector('#preview-gambar');

const defaultJudul = "JUDUL BERITA";
const defaultDetail = "DETAIL: Tim A vs Tim B";
const defaultRingkasan = "Teks ringkasan dari Panel Kontrol akan muncul di sini.";
const defaultImageUrl = "https://placehold.co/600x400/8c8c8c/ffffff?text=FOTO+STANDAR";

inputJudul.addEventListener('input', function () {
    const nilaiInput = inputJudul.value;

    if (nilaiInput.trim() === '') {
        previewJudul.textContent = defaultJudul;
    } else {
        previewJudul.textContent = nilaiInput;
    }
});

inputDetail.addEventListener('input', function () {
    const nilaiInput = inputDetail.value;

    if (nilaiInput.trim() === '') {
        previewDetail.textContent = defaultDetail;
    } else {
        previewDetail.textContent = nilaiInput;
    }
});

inputRingkasan.addEventListener('input', function () {
    const nilaiInput = inputRingkasan.value;

    if (nilaiInput.trim() === '') {
        previewRingkasan.textContent = defaultRingkasan;
    } else {
        previewRingkasan.textContent = nilaiInput;
    }
});

inputGambar.addEventListener('input', function () {
    const nilaiInput = inputGambar.value;

    if (nilaiInput.trim() === '') {
        previewGambar.src = defaultImageUrl;
    } else {
        previewGambar.src = nilaiInput;
    }
});

document.querySelector('#control-panel').addEventListener('submit', function (e) {
    e.preventDefault();
});