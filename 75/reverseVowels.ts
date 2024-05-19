export default function reverseVowels(s: string): string {
    const vowels = 'aeiouAEIOU'

    const array = s.split('')
    let l = 0
    let r = s.length - 1
    while (l < r) {
        if (vowels.includes(s[l])) {
            if (vowels.includes(s[r])) {
                const ch = array[l]
                array[l] = array[r]
                array[r] = ch
                l++
                r--
            } else r--
        } else l++
    }
    return array.join('')
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    const example1 = 'hello'
    const example2 = 'leetcode'
    const example3 = 'aA'

    const answer = ['holle', 'leotcede', 'Aa']

    it('reverseVowels', () => {
        expect(reverseVowels(example1)).toBe(answer[0])
        expect(reverseVowels(example2)).toBe(answer[1])
        expect(reverseVowels(example3)).toBe(answer[2])
    })
}