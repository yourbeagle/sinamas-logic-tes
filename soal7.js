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