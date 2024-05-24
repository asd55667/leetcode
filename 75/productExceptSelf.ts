export default function productExceptSelf(nums: number[]): number[] {
    const zeros: [number, number][] = []
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push([i, zeros.length + 1])
            continue
        }
        product *= nums[i]
    }

    if (zeros.length === 1) return nums.map((n, i) => {
        return i === zeros[0][0] ? product : 0
    })

    if (zeros.length > 1) return Array(nums.length).fill(0)

    return nums.map(n => product / n)
};

import.meta.vitest

const example1 = [1, 2, 3, 4]
const example2 = [-1, 1, 0, -3, 3]
const answer1 = [24, 12, 8, 6]
const answer2 = [0, 0, 9, 0, 0]

