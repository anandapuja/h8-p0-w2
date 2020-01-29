// Logic Challenge - Konversi Menit

function konversiMenit(menit) {
    var jam = menit / 60; //  Ukur hasil bagi antara parameter dengan jumlah menit (60) dalam 1 jam
    var iJam = Math.floor(jam); // Untuk format JAM, ambil hanya angka bulat hasil bagi jika parameter tidak habis dibagi 60
    var modJam = menit % 60; // Tampung nilai hasil sisa bagi parameter dengan jumlah menit (60)
    var formatModJam = modJam.toString().length; // Hitung jumlah digit number dari modJam untuk dijadikan kondisi
    
    // Buat kondisi untuk mengatur format MENIT (setelah :)
    if (formatModJam === 1) { // Jika jumlah digit menit/ modJam hanya 1 digit, tambahkan 0 didepan angkanya
      modJam = "0" + modJam;
    }

    return `${iJam}:${modJam}`; //  Kembalikan format JAM : format MENIT
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00