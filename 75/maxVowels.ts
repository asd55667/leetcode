export default function maxVowels(s: string, k: number): number {
    const dict = 'aeiou'
    let max = getVowels(s.slice(0, k))
    let cur = max
    
    
    for (let i = k; i < s.length; i++) {
        cur = cur - (+dict.includes(s[i - k])) + (+dict.includes(s[i]))
        max = Math.max(max, cur)
    }

    return max

    function getVowels(substr: string) {
        let c = 0
        for (const ch of substr) {
            if (dict.includes(ch)) c += 1
        }
        return c
    }
};

import.meta.vitest

const example1 = ['abciiidef', 3]
const example2 = ['aeiou', 2]
const example3 = ['leetcode', 3]

const answer1 = 3
const answer2 = 2
const answer3 = 2
