const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungWaktu(detik){
    let jam = Math.floor(detik / 3600)
    let sisaDetik = detik % 3600
    let menit = Math.floor(sisaDetik / 60)
    detik = sisaDetik % 60
    return { jam, menit, detik}
}

rl.question("Masukkan jumlah detik: ", function(detik) {
    let waktu = hitungWaktu(parseInt(detik));
  
    console.log(`Hasil konversi: ${waktu.jam}  jam, ${waktu.menit} menit, ${waktu.detik} detik"`);
  
    rl.close();
  });