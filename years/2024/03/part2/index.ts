import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/03/input.txt', 'utf-8');

const ACTIVE_REGIONS_REGEX = /(?:^|do\(\))(.*?)(?=don't\(\)|$)/gs;
const MUL_REGEX = /mul\(\d{1,3},\d{1,3}\)/g;
const NUMBER_REGEX = /\d{1,3}/g;

const activeRegionsInput = (input.match(ACTIVE_REGIONS_REGEX) ?? []).join('');
const mulMatches = activeRegionsInput.match(MUL_REGEX) ?? [];

let sum = 0;
for (const mul of mulMatches) {
    const numbers = mul.match(NUMBER_REGEX)!.map(Number);
    sum += numbers[0] * numbers[1];
}

console.log(`Sum of multiplied numbers in active regions = ${sum}`);
