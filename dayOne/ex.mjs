import fs from 'fs';

function getData(filename) {
  const file = fs.readFileSync(filename, 'utf-8');
  return file.split('\n');
}

const lines = getData('./dayOne/data.txt');

const col1 = [];
const col2 = [];

lines.forEach(line => {
  const [val1, val2] = line.split("   ");
  col1.push(val1)
  col2.push(val2)
})

col1.sort()
col2.sort()

let sum = 0

for (let i = 0; i < col1.length; i++) {
  const distance = Math.abs(col1[i] - col2[i])
  sum += distance;
}

let similarity = 0;

col1.forEach(num => {
  const occurrences = col2.filter(n => n === num).length;
  similarity += num * occurrences;
});

console.log(similarity);