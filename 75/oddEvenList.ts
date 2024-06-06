import { ListNode, array2ListNode } from "./utils.js"

export default function oddEvenList(head: ListNode | null): ListNode | null {
    let even = head
    let odd = head?.next
    let oddHead = odd

    while (even) {
        const nextEven = odd?.next || null
        const nextOdd = nextEven?.next || null

        even.next = nextEven
        if (odd) odd.next = nextOdd

        if (!nextEven) even.next = oddHead || null

        even = nextEven
        odd = nextOdd
    }

    return head
};

import.meta.vitest

const transform = {
    input: array2ListNode,
    output: array2ListNode
}

const example1 = [1, 2, 3, 4, 5]
const example2 = [2, 1, 3, 5, 6, 4, 7]

const answer1 = [1, 3, 5, 2, 4]
const answer2 = [2, 3, 6, 7, 1, 5, 4]