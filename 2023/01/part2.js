function replaceWordsWithNumbers(str) {
  const numbers = ['one','two','three','four','five','six','seven','eight','nine'];
  for (let i = 0; i < numbers.length; i++) {
    var pattern = new RegExp(numbers[i], 'g');
    str = str.replace(pattern, numbers[i] + (i + 1) + numbers[i]);
  }
  return str;
}

function solution(input) {
  let sum = 0;
  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = replaceWordsWithNumbers(lines[i]).split('');
    const numbers = line.filter((value) => !isNaN(value));
    sum += parseInt(numbers[0] + numbers[numbers.length - 1]);
  }
  return sum;
}

const app = require('../../utils.js');
// app.test2(solution, 281);
app.solve(solution);
