var nama = '';
var peran = 'asdas';

if ( nama === '' && peran === '' ) {
    console.log( "Nama dan peran harus diisi!" ); //The condition if both nama and peran is not full filled.
} else if ( nama === nama && peran === '') {
	console.log ('Halo ' + nama + ', Pilih Peranmu untuk memulai game!'); //The condition if any nama not select peran
} else if ( nama === 'Ananda' && peran === 'Ksatria' ) {
	console.log ("Selamat datang di Dunia Proxytia, " + nama + '\nHalo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');// The condition if nama Nina select peran Ksatria
} else if ( nama === 'Puja' && peran === 'Tabib' ) {
	console.log("Selamat datang di Dunia Proxytia, " + nama + '\n' + "Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");// The condition if nama Danu select peran Tabib
} else if ( nama === 'Wandra' && peran === 'Penyihir' ) {
	console.log("Selamat datang di Dunia Proxytia, " + nama + '\n' + "Halo Penyihir "+ nama + ", ciptakan keajaiban yang membantu kemenanganmu!");// The condition if nama Zero select peran Penyihir
} else {
	console.log ('Kombinasi nama: ' + nama + ', dengan peran: ' + peran + ' tidak cocok. Coba lagi!');// The default condition if all condition above not full filled, ex : nama Danu select Penyihir or input is different than conditional data
}