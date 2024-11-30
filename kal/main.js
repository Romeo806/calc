// script.js

let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    // Menghitung ekspresi yang dimasukkan
    let result = eval(display.value); 
    
    // Jika hasilnya adalah 26 + 12 + 1998, arahkan ke halaman gambar
    if (result === 26 / 12 / 1998) {
      window.location.href = "image.html?result=" + result;  // Mengarahkan ke halaman image.html dengan query parameter hasil
    } else {
      display.value = result;  // Tampilkan hasil di kalkulator
    }
  } catch (e) {
    display.value = 'Error';  // Menampilkan error jika ada kesalahan
  }
}
