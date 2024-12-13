import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/04/input.txt', 'utf-8');

const matrix = input.split('\n').map((row) => row.split(''));

let horizontalMatches = 0;
let verticalMatches = 0;
let diagonalMatches = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (
            matrix[i][j] === 'X' &&
            matrix[i][j + 1] === 'M' &&
            matrix[i][j + 2] === 'A' &&
            matrix[i][j + 3] === 'S'
        )
            horizontalMatches++;

        if (
            matrix[i][j] === 'S' &&
            matrix[i][j + 1] === 'A' &&
            matrix[i][j + 2] === 'M' &&
            matrix[i][j + 3] === 'X'
        )
            horizontalMatches++;

        if (
            matrix[i][j] === 'X' &&
            matrix[i + 1]?.[j] === 'M' &&
            matrix[i + 2]?.[j] === 'A' &&
            matrix[i + 3]?.[j] === 'S'
        )
            verticalMatches++;

        if (
            matrix[i][j] === 'S' &&
            matrix[i + 1]?.[j] === 'A' &&
            matrix[i + 2]?.[j] === 'M' &&
            matrix[i + 3]?.[j] === 'X'
        )
            verticalMatches++;

        if (
            matrix[i][j] === 'X' &&
            matrix[i + 1]?.[j + 1] === 'M' &&
            matrix[i + 2]?.[j + 2] === 'A' &&
            matrix[i + 3]?.[j + 3] === 'S'
        )
            diagonalMatches++;

        if (
            matrix[i][j] === 'S' &&
            matrix[i + 1]?.[j + 1] === 'A' &&
            matrix[i + 2]?.[j + 2] === 'M' &&
            matrix[i + 3]?.[j + 3] === 'X'
        )
            diagonalMatches++;

        if (
            matrix[i][j] === 'X' &&
            matrix[i + 1]?.[j - 1] === 'M' &&
            matrix[i + 2]?.[j - 2] === 'A' &&
            matrix[i + 3]?.[j - 3] === 'S'
        )
            diagonalMatches++;

        if (
            matrix[i][j] === 'S' &&
            matrix[i + 1]?.[j - 1] === 'A' &&
            matrix[i + 2]?.[j - 2] === 'M' &&
            matrix[i + 3]?.[j - 3] === 'X'
        )
            diagonalMatches++;
    }
}

const totalMatches = horizontalMatches + verticalMatches + diagonalMatches;

console.log(`Total number of XMAS matches = ${totalMatches}`);
