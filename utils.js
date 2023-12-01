const fs = require('fs');

module.exports = {
  read: function (file) {
    return fs.readFileSync(file, 'utf-8');
  },

  run: function (solution, input) {
    console.time('Time elapsed');
    console.log(solution(input));
    console.timeEnd('Time elapsed');
  },
  solve: function (solution) {
    const input = this.read('input.txt', 'utf-8');
    this.run(solution, input);
  },

  evaluate: function (solution, file, expected = null) {
    const input = this.read(file, 'utf-8');
    console.time('Time elapsed');
    const answer = solution(input);
    console.log(answer);
    if (expected != null) {
      if (answer == expected) console.log('correct');
      else console.log('incorrect');
    }
    console.timeEnd('Time elapsed');
  },
  test: function (solution, expected = null) {
    this.evaluate(solution, 'sample.txt', expected);
  },
  test1: function (solution, expected = null) {
    this.evaluate(solution, 'sample1.txt', expected);
  },
  test2: function (solution, expected = null) {
    this.evaluate(solution, 'sample2.txt', expected);
  },
};
