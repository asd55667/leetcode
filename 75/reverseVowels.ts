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

import.meta.vitest

const example1 = 'hello'
const example2 = 'leetcode'
const example3 = 'aA'

const answer1 = 'holle'
const answer2 = 'leotcede'
const answer3 = 'Aa'