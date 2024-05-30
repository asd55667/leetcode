export default function pivotIndex(nums: number[]): number {
    let i = 0
    let ls = 0
    let rs = nums.slice(1).reduce((prev, cur) => prev + cur, 0)

    for (; i < nums.length; i++) {
        if (ls === rs) return i
        ls += nums[i]
        rs -= nums[i + 1]
    }

    return -1
};

import.meta.vitest

const example1 = [1, 7, 3, 6, 5, 6]
const example2 = [1, 2, 3]
const example3 = [2, 1, -1]

const answer1 = 3
const answer2 = -1
const answer3 = 0