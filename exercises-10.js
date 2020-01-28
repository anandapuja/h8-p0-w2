// Logic Challenge - Bandingkan Angka

function bandingkanAngka(angka1, angka2) { // Buat fungsi dan set parameter
    if( angka2 > angka1 ) { // Buat kondisional dan return function sesuai kondisi
        return true;
    } else if( angka2 < angka1 ) {
        return false;
    }
    else {
        return -1
    }
  }

// Hasil Print
console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));