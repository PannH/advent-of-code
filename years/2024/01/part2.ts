import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/01/input.txt', 'utf-8');

const lists: number[][] = [[], []];

for (const line of input.split('\n')) {
    const values = line.split(/ +/).map(Number);

    if (values.length !== 2) continue;

    lists[0].push(values[0]);
    lists[1].push(values[1]);
}

const similarityScores: number[] = [];
for (const value of lists[0]) {
    const occurrences = lists[1].filter((val) => val === value).length;
    similarityScores.push(value * occurrences);
}

const totalSimilarityScore = similarityScores.reduce(
    (acc, val) => acc + val,
    0
);

console.log(`Total similarity score = ${totalSimilarityScore}`);
