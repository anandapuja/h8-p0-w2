//  1. MENYUSUN BARISAN BINTANG
console.log( 'MENYUSUN BARISAN BINTANG' );

var row1 = 5; // Buat variabel jumlah baris yang akan dieksekusi atau berapa kali melakukan looping
var rowData1 = ''; //  Buat variabel yang isinya akan diisikan dari hasil looping

for( i = 0; i < row1; i++) {
    rowData1 += '* \n';
} // Buat looping, sekali looping jalan, tambahkan bintangnya satu dan spasi ke bawah satu ke var rowData1

console.log( rowData1 ); //Tampilkan hasil looping yang sudah masuk ke var rowData1



//  2. MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING
console.log( 'MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING' );

var row2 = 5; // Buat variabel jumlah baris atau jumlah looping
var rowData2 = ''; // Buat variabel penampung data hasil looping

for( i = 0; i < row2; i++) { // Mulai looping
    for ( h = 0; h < row2; h++ ) { // Looping dulu bintang pada bagian baris
        rowData2 += '*'; // Ketika looping berhasil, tambahkan * ke var rowData2
    }
    rowData2 += '\n'; // Tambahkan spasi ke bawah agar setelah looping baris pertama selesai, bintangnya turun ke bawah
}
console.log( rowData2 ); // Tampilkan hasilnya


//  3. MENYUSUN BARISAN TANGGA BINTANG DENGAN NESTED LOOPING
console.log( 'MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING' );

var row3 = 10;
var rowData3 = '';

for( j = 0; j < row3; j++ ) { // Ini merupakan jumlah baris yang dilooping
    for( i = 0; i <= j; i++ ) { // Ini merupakan looping jumlah bintang, kondisinya jumlah bintang = jumlah baris
        rowData3 += '*'; // Setelah sekali jalan looping langsung out karena start awal looping bintang hanya selisih satu dengan looping baris
    }
    rowData3 += '\n';
}
console.log( rowData3 );
