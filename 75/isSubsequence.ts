export default function isSubsequence(s: string, t: string): boolean {
    let i = 0
    let j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i += 1
            j += 1
        } else {
            j += 1
        }
    }

    return i === s.length
};

import.meta.vitest

const example1 = ['abc', 'ahbgdc']
const example2 = ['axc', 'ahbgdc']

const answer1 = true
const answer2 = false
