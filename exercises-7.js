//  1. MENYUSUN BARISAN BINTANG
console.log( 'MENYUSUN BARISAN BINTANG' );

var n = ''; //  Buat variabel yang isinya akan diisikan dari hasil looping
var row1 = 5; // Buat variabel jumlah baris yang akan dieksekusi atau berapa kali melakukan looping
for( i = 1; i <= row1; i++) {
    n += '* \n';
} // Buat looping, sekali looping jalan, tambahkan bintangnya satu dan spasi ke bawah satu ke var n

console.log( n ); //Tampilkan hasil looping yang sudah masuk ke var n



//  2. MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING
console.log( 'MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING' );

var row2 = 5; // Buat variabel jumlah baris atau jumlah looping
var rowData = ''; // Buat variabel penampung data hasil looping

for( i = 0; i < row2; i++) { // Mulai looping
    for ( h = 0; h < row2; h++ ) { // Looping dulu bintang pada bagian baris
        rowData += '*'; // Ketika looping berhasil, tambahkan * ke var rowData
    }
    rowData += '\n'; // Tambahkan spasi ke bawah agar setelah looping baris pertama selesai, bintangnya turun ke bawah
}
console.log( rowData ); // Tampilkan hasilnya