import { ListNode, array2ListNode } from "./utils.js"

export default function deleteMiddle(head: ListNode | null): ListNode | null {
    let slower = head
    let faster = head?.next?.next
    if (!head?.next) head = null
    else {
        while (faster?.next) {
            slower = slower?.next || null
            faster = faster?.next?.next || null
        }
        if (slower) slower.next = slower?.next?.next || null
    }
    return head
};

import.meta.vitest

const transform = {
    input: array2ListNode,
    output: array2ListNode
}

const example1 = [1, 3, 4, 7, 1, 2, 6]
const example2 = [1, 2, 3, 4]
const example3 = [2, 1]
const example4 = [1]

const answer1 = [1, 3, 4, 1, 2, 6]
const answer2 = [1, 2, 4]
const answer3 = [2]
const answer4 = []