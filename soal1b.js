const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungWaktuReverse(jam, menit, detik){
    jam = jam * 3600
    menit = menit * 60
    detik = detik
    let answer = jam+menit+detik
    return answer 
}

rl.question("Masukkan jumlah jam: ", function(jam) {
    rl.question("Masukkan jumlah menit: ", function(menit) {
        rl.question("Masukkan jumlah detik: ", function(detik) {
            var totalDetik = hitungWaktuReverse(parseInt(jam), parseInt(menit), parseInt(detik));
  
            console.log(`Hasil konversi: ${totalDetik} detik`);
        
            rl.close();
        });
    });
});