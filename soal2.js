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