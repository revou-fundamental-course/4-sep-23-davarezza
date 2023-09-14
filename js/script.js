function hitungLuas() {
    // Mengambil nilai panjang sisi dari input
    let number = parseFloat(document.getElementById("number").value);

    // Menghitung luas persegi
    let area = number * number;

    // Menampilkan hasil langsung di bawah tombol "Hitung Luas"
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `L = S X S<br>L = ${number} X ${number}<br>L = ${area.toFixed(0)}`;
}

function resetLuas() {
    // Mengatur ulang nilai input dan hasil
    document.getElementById("number").value = "";
    document.getElementById("result").textContent = "";
}

function hitungKeliling() {
    // Mengambil nilai panjang sisi dari input
    let nomor = parseFloat(document.getElementById("nomor").value);

    // Menghitung luas persegi
    let keliling = 4 * nomor;

    // Menampilkan hasil langsung di bawah tombol "Hitung Luas"
    let resultElement = document.getElementById("hasil");
    resultElement.innerHTML = `K = 4 X S<br>K = 4 X ${nomor}<br>K = ${keliling.toFixed(0)}`;
}

function resetKeliling() {
    // Mengatur ulang nilai input dan hasil
    document.getElementById("nomor").value = "";
    document.getElementById("hasil").textContent = "";
}