export default function longestOnes(nums: number[], k: number): number {
    const ones: number[] = []
    let last = -1
    nums.forEach((n, i) => {
        if (n && n != last) ones.push(i)
        last = n
    })

    if (!ones.length) return Math.min(nums.length, k)
    let max = 0
    for (const one of ones) {
        let i = one
        let cur = 0
        let offset = k
        while (i < nums.length) {
            if (nums[i]) cur += 1
            else {
                if (offset) {
                    offset -= 1
                    cur += 1
                } else break
            }
            i += 1
        }

        if (offset) {
            let j = one - 1
            while (offset && nums[j] === 0) {
                cur += 1
                offset -= 1
                j -= 1
            }
        }

        max = Math.max(max, cur)
    }

    return max
};

import.meta.vitest

const example1 = [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2]
const example2 = [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3]
const example3 = [[0, 0, 0, 1], 4]
const example4 = [[1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1], 8]
const example5 = [[0, 0, 0, 0], 0]
const example6 = [[0], 1]

const answer1 = 6
const answer2 = 10
const answer3 = 4
const answer4 = 25
const answer5 = 0
const answer6 = 1