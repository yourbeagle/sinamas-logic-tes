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
