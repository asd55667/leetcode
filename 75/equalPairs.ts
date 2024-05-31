export default function equalPairs(grid: number[][]): number {
    const map = new Map()
    for (const row of grid) {
        const s = row.join('-')
        if (map.has(s)) map.set(s, map.get(s) + 1)
        else map.set(s, 1)
    }

    let pairs = 0
    for (let i = 0; i < grid.length; i++) {
        const col = grid.map(row => row[i]).join('-')
        if (map.has(col)) pairs += map.get(col)
    }

    return pairs
};

import.meta.vitest

const example1 = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
const example2 = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
const example3 = [[11, 1], [1, 11]]

const answer1 = 1
const answer2 = 3
const answer3 = 2
