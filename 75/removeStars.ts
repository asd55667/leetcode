export default function removeStars(s: string): string {
    const stack = []
    for (const ch of s) {
        if (ch !== '*') {
            stack.push(ch)
        } else stack.pop()
    }

    return stack.join('')
};

import.meta.vitest

const example1 = "leet**cod*e"
const example2 = "erase*****"

const answer1 = 'lecoe'
const answer2 = ''