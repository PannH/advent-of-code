import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/04/input.txt', 'utf-8');

const matrix = input.split('\n').map((row) => row.split(''));

let matches = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        let branches = 0;

        if (
            matrix[i][j] === 'A' &&
            matrix[i - 1]?.[j - 1] === 'M' &&
            matrix[i + 1]?.[j + 1] === 'S'
        )
            branches++;

        if (
            matrix[i][j] === 'A' &&
            matrix[i - 1]?.[j - 1] === 'S' &&
            matrix[i + 1]?.[j + 1] === 'M'
        )
            branches++;

        if (
            matrix[i][j] === 'A' &&
            matrix[i - 1]?.[j + 1] === 'M' &&
            matrix[i + 1]?.[j - 1] === 'S'
        )
            branches++;

        if (
            matrix[i][j] === 'A' &&
            matrix[i - 1]?.[j + 1] === 'S' &&
            matrix[i + 1]?.[j - 1] === 'M'
        )
            branches++;

        if (branches === 2) matches++;
    }
}

console.log(`Number of X-MAS matches = ${matches}`);
