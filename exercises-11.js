// Logic Challenge - Balik Kata

function balikKata(kata) {

    var balikKata = ""; // Buat variabel penampung hasil akhir
    for( i = kata.length - 1; i >= 0; i-- ) { // Buat perulangan, inisialisasinya jumlah string dalam parameter dikurang 1, kondisi jika inisialisasi lebih dari 0 (true), decrement inisialisasi
        balikKata += kata[i]; // Tambahkan string pada nomor inisialisasi (jumlah length saat itu), otomatis pasti huruf terakhir dalam string ke var penampung
    }
    return balikKata; // Return variabel penampung
    
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS