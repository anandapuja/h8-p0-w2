var nama = "";
var peran = "";

if (nama && peran) {
    console.log("Nama harus diisi!");
} else if (nama === 'Mikael' && peran) {
    console.log('Halo Mikael, Pilih peranmu untuk memulai game!');
} else if (nama === "Nina" && peran === "Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, Nina" \n
    "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
} else if (nama === "Peran" && peran === "Tabib") {
    console.log("Selamat datang di Dunia Proxytia, Danu"\n
    "Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
} else if (nama === "Zero" && peran === "Penyihir") {
    console.log ("Selamat datang di Dunia Proxytia, Zero"\n
    "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
} else {
    console.log();
}