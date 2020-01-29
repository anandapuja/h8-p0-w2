//  Logic Challenge - X dan O

//  ALGORITMA
//  1.  Cek satu persatu dari seluruh jumlah huruf apakah masing2 huruf mengandung huruf x atau o
  //  1.1 Jika huruf mengandung huruf x atau o tambahkan nilai 1 ke variabel o atau x yang sebelumnya di assign nilai 0
  //  1.2 var o dan x telah memiliki nilai yang bisa dibandingkan
//  2. Jika jumlah karakter x dan o sama, maka true,
//  3. Jika jumlah karakter x dan o tidak sama, maka false.

function xo(str) {
    var o = 0; // Buat variabel penampung jumlah masing2 huruf o dan x
    var x = 0;    
    for( i = str.length - 1; i >= 0; i-- ) { // Mulai cek satu per satu huruf
      
      if (str[i] === "o") { // Apabila pada index huruf SAMA DENGAN o, tambahkan nilai 1 ke var o
        o += 1;
      }
      else if ( str[i] === "x" ) { // Apabila pada index huruf SAMA DENGAN x, tambahkan nilai 1 ke var x
        x += 1;
      }
      else {
        console.log( 'Index bukan x maupun o' );
      }
    }

    if ( x === o) { // Hasil kondisi terakhir jika jumlah o dan x sama maka true, begitu sebaliknya
      return true;
    } else if ( x !== o ) {
      return false;
    }
}

  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true