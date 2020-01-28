//  TUGAS 1
function shoutOut() { // buat function
    return 'Halo Function!'; // kembalikan nilai function
}
console.log( shoutOut() ); // panggil function



//  TUGAS 2
function calculateMultiply() { // buat kalkulasi
    return num1 * num2; // kembalikan nilai fuction
}

var num1 = 5; // buat variabel
var num2 = 6;

var hasilPerkalian = calculateMultiply(); // panggil fuction dan tampung pada variabel
console.log( hasilPerkalian ); // tampilkan return fuction



//  TUGAS 3
function processSentence() { // buat fungsi
    return 'Nama Saya ' + name + ', umur saya ' + age + ', alamat saya di ' + address + ' , dan saya punya hobby yaitu ' + hobby + '!';
}

// tambahkan variabel dan isi dengan nilai yang telah ditentukan
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence( name, age, address, hobby ); // panggil return dan tampung dalam sebuah variabel
console.log ( fullSentence ); // cetak variabel yang menampung return