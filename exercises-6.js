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

//  Ganjil Genap
console.log( 'GANJIL - GENAP' );
for( i = 1; i < 100; i++ ) {
    if ( i % 2 == 0 ) {
        console.log( i + ' - GENAP' );
    }
    else {
        console.log( i + ' - GANJIL' );
    }
}

//	Kelipatan 3
console.log( 'KELIPATAN 3' );
for( i = 1; i <= 100; i += 2 ) {
	if( i % 3 !== 0 ) {
		console.log();
	}
	else {
		console.log( i + ' - KELIPATAN 3' )
	}
}

//  Kelipatan 6
console.log( 'KELIPATAN 6' );
for( i = 1; i <=100; i += 5 ) {
    if ( i % 6 !== 0 ) {
        console.log();
    }
    else {
        console.log( i + ' - KELIPATAN 6' );
    }
}

//  Kelipatan 10
console.log( 'KELIPATAN 10' );
for( i = 1; i <= 100; i += 9 ) {
    if( i % 10 !== 0 ) {
        console.log();
    }
    else {
        console.log( i + ' - KELIPATAN 10' );
    }
}