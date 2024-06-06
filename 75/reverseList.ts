import { ListNode, array2ListNode } from "./utils.js"

export default function reverseList(head: ListNode | null): ListNode | null {
    let cur = head
    let next = cur?.next || null
    while (next) {
        const nextOfNext = next.next

        next.next = cur
        cur = next
        next = nextOfNext
    }
    if (head) head.next = null
    
    return cur
};

import.meta.vitest

const transform = {
    input: array2ListNode,
    output: array2ListNode
}

const example1 = [1, 2, 3, 4, 5]
const example2 = [1, 2]
const example3 = []

const answer1 = [5, 4, 3, 2, 1]
const answer2 = [2, 1]
const answer3 = []