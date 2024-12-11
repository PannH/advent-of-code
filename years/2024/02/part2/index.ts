import { readFileSync } from 'node:fs';

const input = readFileSync('years/2024/02/input.txt', 'utf-8');

const reports: number[][] = [];
for (const line of input.split('\n').filter((l) => l !== '')) {
    const levels = line.split(/ +/).map(Number);
    reports.push(levels);
}

function isReportSafe(report: number[]): boolean {
    const ascendingSortedReport = report.slice().sort((a, b) => a - b);
    const descendingSortedReport = report.slice().sort((a, b) => b - a);

    if (
        ascendingSortedReport.toString() !== report.toString() &&
        descendingSortedReport.toString() !== report.toString()
    ) {
        return false;
    }

    for (let i = 0; i < report.length - 1; i++) {
        const level = report[i];
        const nextLevel = report[i + 1];

        const difference = Math.abs(level - nextLevel);

        if (difference < 1 || difference > 3) return false;
    }

    return true;
}

let safeReportsCount = 0;
for (const report of reports) {
    if (isReportSafe(report)) {
        safeReportsCount++;
    } else {
        for (let i = 0; i < report.length; i++) {
            const filteredReport = report.filter((_, idx) => idx !== i);
            if (isReportSafe(filteredReport)) {
                safeReportsCount++;
                break;
            }
        }
    }
}

console.log(`Safe reports count = ${safeReportsCount}`);
