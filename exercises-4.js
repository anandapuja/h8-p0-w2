var tanggal = 17;
var bulan = 8;
var tahun = 1945;
//DISPLAY 17 Agustus 1945, MERDEKA!

if (tanggal <= 31 && tahun >= 1900 && tahun <= 2200) { //Batasi orang agar tidak salah memasukkan tanggal, misal tanggal 33
    switch (bulan) {
        case 1 :
            console.log( tanggal + ' Januari ' + tahun );
            break;
        case 2 :
            console.log( tanggal + ' Februari ' + tahun );
            break;
        case 3 :
            console.log( tanggal + ' Maret ' + tahun );
            break;
        case 4 :
            console.log( tanggal + ' April ' + tahun );
            break;
        case 5 :
            console.log( tanggal + ' Mei ' + tahun );
            break;
        case 6 :
            console.log( tanggal + ' Juni ' + tahun );
            break;
        case 7 :
            console.log( tanggal + ' Juli ' + tahun );
            break;
        case 8 :
            console.log( tanggal + ' Agustus ' + tahun );
            break;
        case 9 :
            console.log( tanggal + ' September ' + tahun );
            break;
        case 10 :
            console.log( tanggal + ' Oktober ' + tahun );
            break;
        case 11 :
            console.log( tanggal + ' November ' + tahun );
            break;
        case 12 :
            console.log( tanggal + ' Desember ' + tahun );
            break;
        default :
            console.log('Bulan yang Anda masukkan salah atau tidak dikenali');
            break;
    }
} else {
    console.log('Salah satu dari tanggal dan atau tahun yang Anda masukkan salah');
}
// Dari soal, tampilah yang diubah hanya bulan dari angka menjadi nama bulan, maka var bulan di SWITCH