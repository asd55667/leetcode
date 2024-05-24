export default function increasingTriplet(nums: number[]): boolean {
    // // brutal force
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         for (let k = 0; k < j; k++) {
    //             if (nums[i] > nums[j] && nums[j] > nums[k]) return true
    //         }
    //     }
    // }

    // // time O(n^2), space O(n) 
    // const dp = Array(nums.length).fill(false)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[i] > nums[j]) {
    //             if (dp[j]) return true
    //             dp[i] = true
    //         }
    //     }
    // }

    // // // time O(n), space O(1)
    // let pair1: number[] = []
    // let pair2: number[] = []
    // for (const n of nums) {
    //     if (!pair1.length) pair1[0] = n
    //     if (pair1.length === 1) {
    //         if (n > pair1[0]) pair1[1] = n
    //         else pair1[0] = n
    //     }

    //     if (pair1.length === 2) {
    //         if (n > pair1[1]) return true

    //         if (n > pair1[0]) pair1[1] = n
    //         else if (!pair2.length) pair2[0] = n
    //         else if (n > pair2[0]) { pair1 = [pair2[0], n], pair2 = [] }
    //         else if (n > pair1[0]) pair1 = [pair1[0], n]
    //     }
    // }

    let d1: number | null = null
    let d2: number | null = null
    let d3: number | null = null
    for (const n of nums) {
        if (d1 === null) d1 = n
        if (d1 !== null && d2 === null) {
            if (n > d1) d2 = n
            else d1 = n
        }

        if (d1 !== null && d2 !== null) {
            if (n > d2) return true

            if (n > d1) d2 = n
            else if (d3 === null) d3 = n
            else if (n > d3) { [d1, d2] = [d3, n], d3 = null }
            else if (n > d1) [d1, d2] = [d1, n]
        }
    }

    return false
};

import.meta.vitest

const example1 = [1, 2, 3, 4, 5]
const example2 = [5, 4, 3, 2, 1]
const example3 = [2, 1, 5, 0, 4, 6]
const example4 = [1, 5, 0, 4, 1, 3]
const example5 = [0, 4, 2, 1, 0, -1, -3]
const example6 = [20, 100, 10, 12, 5, 13]
const example7 = [1, 1, 1, 1, 1, 1, 3, 7]
const example8 = [1, 1, 1, 1, 1, 1, 1]
const example9 = [6, 7, 1, 2]
const example10 = [1, 2, 1, 2, 1, 2, 1, 2]
const example11 = [20, 21, 18, 19, 5, 6, 7]

const answer1 = true
const answer2 = false
const answer3 = true
const answer4 = true
const answer5 = false
const answer6 = true
const answer7 = true
const answer8 = false
const answer9 = false
const answer10 = false
const answer11 = true
