//  1. MELAKUKAN LOOPING MENGGUNAKAN WHILE

//  LOOPING PERTAMA
console.log( 'LOOPING PERTAMA' );
var i = 2;
while ( i <= 20 ) {
    console.log( i + ' - I love coding' );
    i++;
}

//  LOOPING KEDUA
console.log( 'LOOPING KEDUA' );
var i = 20;
while ( i >= 2 ) {
    console.log( i + ' - I will become fullstack developer');
    i--;
}

//  2. MELAKUKAN LOOPING MENGGUNAKAN FOR

//  LOOPING PERTAMA
console.log( 'LOOPING PERTAMA' );
for ( i = 2; i <= 20; i++ ) {
    console.log( i + ' - I love coding' );
}

//  LOOPING KEDUA
console.log( 'LOOPING KEDUA' );
for ( i = 20; i >= 2; i-- ) {
    console.log( i + ' - I will become fullstack developer');
}

//  3. ANGKA GANJIL DAN GENAP

for( i = 1; i < 100; i++ ) {
    if ( i % 2 == 0 ) {
        console.log( 'GENAP' );
    }
    else {
        console.log( 'GANJIL' );
    }
}