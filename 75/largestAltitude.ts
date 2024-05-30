export default function largestAltitude(gain: number[]): number {
    let max = 0
    let latitude = 0

    for (const n of gain) {
        latitude += n
        max = Math.max(max, latitude)
    }

    return max
};

import.meta.vitest

const example1 = [-5, 1, 5, 0, -7]
const example2 = [-4, -3, -2, -1, 4, 3, 2]

const answer1 = 1
const answer2 = 0