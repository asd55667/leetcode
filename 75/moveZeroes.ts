export default function moveZeroes(nums: number[]): void {
    // zero index
    let i = 0
    // non zero index
    let j = 0

    while (i < nums.length && j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            if (i < j) swap(nums, i, j)
            else j += 1
        }

        if (nums[i] !== 0) i += 1
        if (nums[j] === 0) j += 1
    }

    // @ts-ignore
    return nums
};

function swap<T>(array: T[], i: number, j: number) {
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

import.meta.vitest

const example1 = [0, 1, 0, 3, 12]
const example2 = [0]
const example3 = [1, 0]
const example4 = [1, 0, 0]

const answer1 = [1, 3, 12, 0, 0]
const answer2 = [0]
const answer3 = [1, 0]
const answer4 = [1, 0, 0]

