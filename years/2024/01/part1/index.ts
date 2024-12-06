import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/01/input.txt', 'utf-8');

const lists: number[][] = [[], []];

for (const line of input.split('\n')) {
    const values = line.split(/ +/).map(Number);

    if (values.length !== 2) continue;

    lists[0].push(values[0]);
    lists[1].push(values[1]);
}

lists.map((list) => list.sort((a, b) => a - b));

const distances: number[] = [];

for (let i = 0; i < lists[0].length; i++) {
    const values = [lists[0][i], lists[1][i]].sort((a, b) => b - a);
    const distance = values[0] - values[1];
    distances.push(distance);
}

const totalDistance = distances.reduce((acc, distance) => acc + distance, 0);

console.log(`Total distance = ${totalDistance}`);
