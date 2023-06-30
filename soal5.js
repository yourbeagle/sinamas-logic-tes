const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cekHurufTerpakai(kalimat) {
  const hurufTerpakai = {};
  const cleanedKalimat = kalimat.toLowerCase().replace(/[^a-z]/g, '');

  for (let huruf of cleanedKalimat) {
    if (hurufTerpakai[huruf]) {
      hurufTerpakai[huruf]++;
    } else {
      hurufTerpakai[huruf] = 1;
    }
  }

  const sortedHurufTerpakai = Object.keys(hurufTerpakai).sort();

  let hasil = "";
  let jumlahHurufTerpakai = 0;
  for (let huruf of sortedHurufTerpakai) {
    hasil += `${huruf}: ${hurufTerpakai[huruf]}, `;
    jumlahHurufTerpakai += hurufTerpakai[huruf];
  }

  return {
    hurufTerpakai: hasil.slice(0, -2), 
    jumlahHurufTerpakai: jumlahHurufTerpakai
  };
}

rl.question("Masukkan kalimat: ", function(kalimat) {
  const { hurufTerpakai, jumlahHurufTerpakai } = cekHurufTerpakai(kalimat);
  console.log("Huruf terpakai: ", hurufTerpakai);
  console.log("Jumlah huruf terpakai: ", jumlahHurufTerpakai);

  rl.close();
});
