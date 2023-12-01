function solution(input) {
  let sum = 0;
  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split('');
    const numbers = line.filter((value) => !isNaN(value));
    sum += parseInt(numbers[0] + numbers[numbers.length - 1]);
  }
  return sum;
}

const app = require('../../utils.js');
// app.test(solution, 142);
app.solve(solution);
