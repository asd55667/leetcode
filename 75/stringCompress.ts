export default function stringCompress(chars: string[]): number {
    let s = ''
    let current = chars[0]
    let count = 0
    for (const char of chars) {
        if (current === char) {
            count += 1
        } else {
            if (count > 1) s += current + count.toString()
            if (count === 1) s += current
            current = char
            count = 1
        }
    }
    if (count > 1) s += current + count.toString()
    if (count === 1) s += current
    chars.unshift(...s.split(''))
    return s.length
};

import.meta.vitest

const example1 = ["a", "a", "b", "b", "c", "c", "c"]
const example2 = ['a']
const example3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]

const answer1 = 6
const answer2 = 1
const answer3 = 4

