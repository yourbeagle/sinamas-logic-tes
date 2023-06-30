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