# Jawaban Logic Test Sinarmas

# Cara Menjalankan Source Code
- Install Node.Js
- Setelah install clone repo ini
- Jalankan di cmd dengan command Node {namafile}
---

## Soal 1a
Diberikan suatu jumlah detik dan programmer diminta untuk mengkonversikan suatu jumlah detik ke dalam jam, menit, dan detik yang bersesuaian

#### Source Code Soal 1a
```
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
```

#### Contoh Code ketika di run
```
Masukkan jumlah detik : 3665
Hasil konversi : 1 jam, 1 menit, 5 detik
```

## Soal1b
Case diatas sekarang dibalik, dengan diberikan jumlah jam, menit, dan detik dan programmer diminta untuk mengkoversikan ke dalam detik

#### Source Code soal 1b
```
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
```

#### Contoh Code ketika di run
```
Masukkan jumlah jam : 1
Masukkan jumlah menit : 2
Masukkan jumlah detik : 10
Hasil konversi : 3730 detik
```

## Soal 2
Buatlah suatu program untuk menghitung suatu nilai faktorial dengan cara rekursif

#### Source Code soal 2
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitungFaktorial(nilai){
    let faktorial = 1

    for(let i = 1; i <= nilai; i++){
        faktorial *= i
    }

    return faktorial
}

rl.question("Masukkan nilai faktorial : ", function(nilai) {
    nilai = parseInt(nilai)

    if(nilai < 0){
        console.log("Nilai harus lebih dari 0 atau tidak boleh negatif")
    } else {
        const hasilFaktorial = hitungFaktorial(nilai)
        console.log(`Faktorial dari ${nilai} adalah : ${hasilFaktorial}`)
    }

    rl.close()
})
```

#### Contoh Code ketika di run
```
Masukkan nilai faktorial : 10
Faktorial dari 10 adalah : 3628800
```

## Soal 3
Buatlah suatu program untuk menentukan apakah tahun yang diinput adalah tahun kabisat atau bukan

#### Source Code soal 3
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function kabisatOrNot(tahun){
    if((tahun % 4 === 0 && tahun % 100 !== 0 ) || tahun % 400 === 0){
        return true
    } else {
        return false
    }
}

rl.question("Masukkan tahun : ", function(tahun){
    tahun = parseInt(tahun)

    if(kabisatOrNot(tahun)){
        console.log(`${tahun} adalah tahun kabisat`)
    }else{
        console.log(`${tahun} bukan tahun kabisat`)
    }

    rl.close()
})
```

#### Contoh Code ketika di run
```
Masukkan tahun : 2020
2020 adalah tahun kabisat
```

## Soal 4
Buat program untuk mengecek apakah suatu kata adalah palindrome

#### Source Code soal 4
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function palindromeOrNot(word){
    const cleanedWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    const reversedWord = cleanedWord.split('').reverse().join('')
    return cleanedWord === reversedWord
}

rl.question("Masukkan kata : ", function(word) {
    if(palindromeOrNot(word)){
        console.log(`${word} adalah palindrome`)
    } else {
        console.log(`${word} bukan palindrome`)
    }

    rl.close()
})
```

#### Contoh Code ketika di run
```
Masukkan kata : kasur ini rusak
kasur ini rusak adalah palindrome
```

## Soal 5
Buatlah program untuk mengecek huruf yang terpakai dan jumlahnya dari suatu kalimat. Huruf yang terpakai ditampilkan secara berurutan

#### Source Code soal 5
```
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
```

#### Contoh Code ketika di run
```
Masukkan kalimat : dua ratus lima puluh tujuh
Huruf terpakai : a:3, d:1, h:2, i:1, j:1, l:2, m:1, p:1, r:1, s:1, t:2, u:6
Jumlah huruf terpakai : 22
```

## Soal 6
Buatlah program untuk menghasilkan bilangan segitiga paskal sesuai dengan kedalaman level yang diinginkan

#### Source Code soal 6
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateTriangle(level) {
  const triangle = [];

  for (let i = 0; i < level; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    triangle.push(row);
  }

  return triangle;
}

function printTriangle(triangle) {
  const maxNumWidth = String(triangle[triangle.length - 1][Math.floor(triangle.length / 2)]).length;

  for (let i = 0; i < triangle.length; i++) {
    const spaces = " ".repeat(triangle.length - i - 1);
    const rowStr = triangle[i]
      .map(num => String(num).padStart(maxNumWidth, " "))
      .join(" ");
    console.log(spaces + rowStr);
  }
}

rl.question("Masukkan kedalaman level: ", function(level) {
  const pascalTriangle = generateTriangle(parseInt(level));
  printTriangle(pascalTriangle);

  rl.close();
});
```

#### Contoh Code ketika di run
```
Masukkan kedalaman level : 5
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

## Soal 7
Buatlah program untuk menghilangkan tanda baca pada kalimat yang dimasukkan

#### Source Code soal 7
```
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removePunctuation(word){
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '')
    return cleanedWord
}

rl.question("Masukkan kalimat : ", function(word) {
    const wordWithoutPunctuation = removePunctuation(word)
    console.log(`Kalimat tanpa tanda baca : ${wordWithoutPunctuation}`)

    rl.close()
})
```

#### Contoh Code ketika di run
```
Masukkan kalimat : A' punya member B' punya member C'. Jika C' menjual produk sebesar $ 1,000,000 maka C' akan mendapatkan bonus $ 50,000. B' akan mendapatkan bonus $30,000. dan 'A' akan mendapatkan bonus $20,000
Kalimat tanpa tanda baca : ApunyamemberBpunyamemberCJikaCmenjualproduksebesar1000000makaCakanmendapatkanbonus50000Bakanmendapatkanbonus30000danAakanmendapatkanbonus20000
```
