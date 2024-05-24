export default function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let i = 0
    while (i < flowerbed.length) {
        if (n <= 0) return true

        const prev = flowerbed[i - 1]
        const next = flowerbed[i + 1]
        if (!prev && !next && !flowerbed[i]) {
            n--
            i = i + 2
        } else i++
    }

    return n <= 0
};

import.meta.vitest

const example1: [number[], number] = [[1, 0, 0, 0, 1], 1]
const example2: [number[], number] = [[1, 0, 0, 0, 1], 2]
const example3: [number[], number] = [[1, 0, 0, 0, 0, 0, 1], 2]

const answer1 = true
const answer2 = false
const answer3 = true
