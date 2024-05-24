export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies)
    return candies.map(candy => ((candy + extraCandies) >= max) ? true : false)
};

import.meta.vitest

const example1: [number[], number] = [[2, 3, 5, 1, 3], 3]
const example2: [number[], number] = [[4, 2, 1, 1, 2], 1]
const example3: [number[], number] = [[12, 1, 12], 10]

const answer1 = [true, true, true, false, true]
const answer2 = [true, false, false, false, false]
const answer3 = [true, false, true]
