export default function maxArea(height: number[]): number {
    let l = 0
    let r = height.length - 1

    let area = Number.MIN_SAFE_INTEGER

    while (l < r) {
        const h = Math.min(height[l], height[r])
        area = Math.max(area, h * (r - l))
        if (height[l] < height[r]) l += 1
        else r -= 1
    }

    return area
};

import.meta.vitest

const example1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const example2 = [1, 1]

const answer1 = 49
const answer2 = 1