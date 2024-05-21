export default function reverseWords(s: string): string {
    return s.trim().split(' ').filter(Boolean).reverse().map(s => s.trim()).join(' ')
};

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    const example1 = 'the sky is blue'
    const example2 = 'a good   example'

    const answer = ['blue is sky the', 'example good a']

    it('reverseWords', () => {
        expect(reverseWords(example1)).toBe(answer[0])
        expect(reverseWords(example2)).toBe(answer[1])
    })
}