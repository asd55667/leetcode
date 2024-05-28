export default function findMaxAverage(nums: number[], k: number): number {
    let max = sum(0, k)
    let cur = max
    
    for (let i = k; i < nums.length; i++) {
        cur = cur - nums[i - k] + nums[i]
        max = Math.max(max, cur)
    }

    return max / k

    function sum(i: number, j: number) {
        let s = 0
        for (let k = i; k < j; k++) {
            s += nums[k]
        }
        return s
    }
};


import.meta.vitest

const example1 = [[1, 12, -5, -6, 50, 3], 4]
const example2 = [[5], 1]

const answer1 = 12.7500
const answer2 = 5.00000