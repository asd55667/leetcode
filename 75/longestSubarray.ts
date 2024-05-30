export default function longestSubarray(nums: number[]): number {
    const cache: [number, number][] = []
    for (const n of nums) {
        const last = cache[cache.length - 1]
        if (!last) { cache.push([n, 1]); continue }
        if (last[0] === n) last[1] += 1
        else cache.push([n, 1])
    }

    let max = 0
    let zero = 0
    for (let i = 0; i < cache.length; i++) {
        if (cache[i][0] === 0) {
            zero += 1
            const prev = cache[i - 1]?.[1] || 0
            const next = cache[i + 1]?.[1] || 0
            if (cache[i][1] === 1) {
                max = Math.max(max, prev + next)
            } else {
                max = Math.max(max, prev, next)
            }
        }
    }
    if (!zero) return nums.length - 1

    return max
};

import.meta.vitest

const example1 = [1, 1, 0, 1]
const example2 = [0, 1, 1, 1, 0, 1, 1, 0, 1]
const example3 = [1, 1, 1]
const example4 = [1, 1, 0, 0, 1, 1, 1, 0, 1]
const example5 = [0, 0, 0]
const example6 = [1, 0, 0, 0, 0]
const example7 = [0, 0, 1, 1]
const example8 = [0, 1, 1, 1, 0, 0, 1, 1, 0]
const example9 = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1]
const example10 = [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]

const answer1 = 3
const answer2 = 5
const answer3 = 2
const answer4 = 4
const answer5 = 0
const answer6 = 1
const answer7 = 2
const answer8 = 3
const answer9 = 2
const answer10 = 11