export default function mergeAlternately(word1: string, word2: string) {
    let i = 0
    let j = 0
    let word = ''
    while (i < word1.length && j < word2.length) {
        word += word1[i] + word2[j]
        i++;
        j++
    }

    if (i < word1.length) word += word1.slice(i)
    if (j < word2.length) word += word2.slice(j)
    return word
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    const example1: [string, string] = ["abc", "pqr"]
    const example2: [string, string] = ["ab", "pqrs"]
    const example3: [string, string] = ["abcd", "pq"]

    const answer = ['apbqcr', 'apbqrs', 'apbqcd']

    it('mergeAlternately', () => {
        expect(mergeAlternately(...example1)).toBe(answer[0])
        expect(mergeAlternately(...example2)).toBe(answer[1])
        expect(mergeAlternately(...example3)).toBe(answer[2])
    })
}