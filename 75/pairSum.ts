import { ListNode, array2ListNode } from "./utils.js"

import reverseList from './reverseList.js'

export default function pairSum(head: ListNode | null): number {
    let max = 0

    let slower = head
    let faster = head?.next || null
    let i = 0
    while (faster) {
        i += 1
        slower = slower?.next || null
        faster = faster.next?.next || null
    }

    let l = head
    let r = reverseList(slower)
    while (i > 0) {
        const val = (l?.val || 0) + (r?.val || 0)
        max = Math.max(max, val)
        l = l?.next || null
        r = r?.next || null
        i -= 1
    }

    return max
};

import.meta.vitest

const transform = {
    input: array2ListNode,
}

const example1 = [5, 4, 2, 1]
const example2 = [4, 2, 2, 3]
const example3 = [1, 100000]

const answer1 = 6
const answer2 = 7
const answer3 = 100001