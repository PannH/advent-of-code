import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/06/input.txt', 'utf-8');

const grid = input.split('\n').map((line) => line.split(''));

type Position = [number, number];
type Direction = 'up' | 'down' | 'left' | 'right';

let position: Position = [0, 0];
let direction: Direction = 'up';

grid.forEach((line, lineI) => {
    line.forEach((cell, cellI) => {
        if (cell === '^') position = [lineI, cellI];
    });
});

const distinctPositions: Set<string> = new Set();

loop: while (true) {
    distinctPositions.add(position.toString());

    switch (direction) {
        case 'up': {
            const nextPos: Position = [position[0] - 1, position[1]];

            if (!grid[nextPos[0]]?.[nextPos[1]]) break loop;

            if (grid[nextPos[0]]?.[nextPos[1]] === '#') {
                direction = 'right';
            } else {
                position = nextPos;
            }

            break;
        }

        case 'right': {
            const nextPos: Position = [position[0], position[1] + 1];

            if (!grid[nextPos[0]]?.[nextPos[1]]) break loop;

            if (grid[nextPos[0]]?.[nextPos[1]] === '#') {
                direction = 'down';
            } else {
                position = nextPos;
            }

            break;
        }

        case 'down': {
            const nextPos: Position = [position[0] + 1, position[1]];

            if (!grid[nextPos[0]]?.[nextPos[1]]) break loop;

            if (grid[nextPos[0]]?.[nextPos[1]] === '#') {
                direction = 'left';
            } else {
                position = nextPos;
            }

            break;
        }

        case 'left': {
            const nextPos: Position = [position[0], position[1] - 1];

            if (!grid[nextPos[0]]?.[nextPos[1]]) break loop;

            if (grid[nextPos[0]]?.[nextPos[1]] === '#') {
                direction = 'up';
            } else {
                position = nextPos;
            }

            break;
        }
    }
}

console.log(`Distinct positions: ${distinctPositions.size}`);
