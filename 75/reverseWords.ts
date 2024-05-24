export default function reverseWords(s: string): string {
    return s.trim().split(' ').filter(Boolean).reverse().map(s => s.trim()).join(' ')
};

import.meta.vitest

const example1 = 'the sky is blue'
const example2 = 'a good   example'

const answer1 = 'blue is sky the'
const answer2 = 'example good a'
