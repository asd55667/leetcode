export default function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map()
    for (const n of arr) {
        if (map.has(n)) map.set(n, map.get(n) + 1)
        else map.set(n, 1)
    }
    return new Set(map.values()).size === map.size
};

import.meta.vitest

const example1 = [1, 2, 2, 1, 1, 3]
const example2 = [1, 2]
const example3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
const example4 = [3, 5, -2, -3, -6, -6]

const answer1 = true
const answer2 = false
const answer3 = true
const answer4 = false