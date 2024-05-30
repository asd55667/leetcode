export default function findDifference(nums1: number[], nums2: number[]): number[][] {
    const answer1: number[] = []
    const answer2: number[] = []

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    for (const n of set1) {
        if (!set2.has(n)) answer1.push(n)
    }
    for (const n of set2) {
        if (!set1.has(n)) answer2.push(n)
    }

    return [answer1, answer2]
};

import.meta.vitest

const example1 = [[1, 2, 3], [2, 4, 6]]
const example2 = [[1, 2, 3, 3], [1, 1, 2, 2]]

const answer1 = [[1, 3], [4, 6]]
const answer2 = [[3], []]