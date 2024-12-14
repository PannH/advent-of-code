import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/05/input.txt', 'utf-8');

const sections = input.split('\n\n');
const rules = sections[0]
    .split('\n')
    .map((rule) => rule.split('|').map(Number));
const updates = sections[1]
    .split('\n')
    .map((update) => update.split(',').map(Number));

const orderlyUpdates: number[][] = [];
for (const update of updates) {
    const updateRules = rules.filter((rule) =>
        rule.every((r) => update.includes(r))
    );
    if (
        updateRules.every(
            (rule) => update.indexOf(rule[0]) < update.indexOf(rule[1])
        )
    )
        orderlyUpdates.push(update);
}

let sum = 0;
for (const update of orderlyUpdates) {
    const middleIndex = Math.floor(update.length / 2);
    sum += update[middleIndex];
}

console.log(`Sum of orderly updates' middles = ${sum}`);
