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