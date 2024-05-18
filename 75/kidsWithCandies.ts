export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies)
    return candies.map(candy => ((candy + extraCandies) >= max) ? true : false)
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    const example1: [number[], number] = [[2, 3, 5, 1, 3], 3]
    const example2: [number[], number] = [[4, 2, 1, 1, 2], 1]
    const example3: [number[], number] = [[12, 1, 12], 10]

    const answer = [[true, true, true, false, true], [true, false, false, false, false], [true, false, true]]

    it('gcdOfStrings', () => {
        expect(kidsWithCandies(...example1)).toStrictEqual(answer[0])
        expect(kidsWithCandies(...example2)).toStrictEqual(answer[1])
        expect(kidsWithCandies(...example3)).toStrictEqual(answer[2])
    })
}
