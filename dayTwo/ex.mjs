import fs from 'fs';

const data = fs.readFileSync('./dayTwo/test.txt', 'utf-8')
const rows = data.split("\n").map(row => row.split(" "));

const minIncrement = 1;
const maxIncrement = 3;
