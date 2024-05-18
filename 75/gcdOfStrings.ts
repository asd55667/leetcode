export default function gcdOfStrings(str1: string, str2: string) {
    const len = gcd(str1.length, str2.length)

    const sub = str2.slice(0, len)
    if (sub.repeat(str1.length / len) === str1 && sub.repeat(str2.length / len) === str2) return sub
    return ''
};

// str1 + str2 = str2 + str1


function gcd(n1: number, n2: number): number {
    if (n2 === 0) return n1
    return gcd(n2, n1 % n2)
}

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    const example1: [string, string] = ["ABCABC", "ABC"]
    const example2: [string, string] = ["ABABAB", "ABAB"]
    const example3: [string, string] = ["LEET", "CODE"]
    const example4: [string, string] = ["ABCDEF", "ABC"]
    const example5: [string, string] = ["AA", "A"]

    const answer = ['ABC', 'AB', '', '', 'A']

    it('gcdOfStrings', () => {
        expect(gcdOfStrings(...example1)).toBe(answer[0])
        expect(gcdOfStrings(...example2)).toBe(answer[1])
        expect(gcdOfStrings(...example3)).toBe(answer[2])
        expect(gcdOfStrings(...example4)).toBe(answer[3])
        expect(gcdOfStrings(...example5)).toBe(answer[4])
    })
}
