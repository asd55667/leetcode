export default function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false

    const map1 = getMap(word1)
    const map2 = getMap(word2)

    const sameKey = isEqual(map1.keys(), map2.keys())
    const sameValue = isEqual(map1.values(), map2.values())

    return sameKey && sameValue

    function getMap(word: string) {
        const map = new Map()
        for (const char of word) {
            if (map.has(char)) map.set(char, map.get(char) + 1)
            else map.set(char, 1)
        }
        return map
    }

    function isEqual(arr1: Iterable<number>, arr2: Iterable<number>) {
        const a1 = Array.from(arr1)
        const a2 = Array.from(arr2)
        a1.sort()
        a2.sort()
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) return false
        }
        return true
    }
};

import.meta.vitest

const example1 = ["abc", "bca"]
const example2 = ['a', 'aa']
const example3 = ['cabbba', 'abbccc']
const example4 = ["abbzzca", "babzzcz"]
const example5 = ["aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"]


const answer1 = true
const answer2 = false
const answer3 = true
const answer4 = false
const answer5 = false