export default function decodeString(s: string): string {
    let num = ''
    let decoded = ''
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        const code = ch.charCodeAt(0)
        if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) num += ch
        if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) decoded += ch
        if (ch === '[') {
            let k = 1
            let j = i + 1
            while (j < s.length) {
                if (s[j] === '[') k += 1
                if (s[j] === ']') k -= 1
                if (k === 0) break;
                j += 1
            }
            const sub = decodeString(s.slice(i + 1, j))
            decoded += (num ? sub.repeat(+num) : sub)
            num = ''
            i = j
        }
    }

    return decoded
};

import.meta.vitest

const example1 = "3[a]2[bc]"
const example2 = "3[a2[c]]"
const example3 = "2[abc]3[cd]ef"
const example4 = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"

const answer1 = "aaabcbc"
const answer2 = 'accaccacc'
const answer3 = 'abcabccdcdcdef'
const answer4 = "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"