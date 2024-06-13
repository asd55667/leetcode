/**
 * Linked List
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export function array2ListNode(array: number[]): ListNode | null {
    if (!array.length) return null

    let head = new ListNode()
    let cur = head
    for (const n of array) {
        cur.next = new ListNode(n)
        cur = cur.next
    }
    if (head.next) head = head.next
    return head
}

/**
 * Binary Tree
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function array2TreeNode(array: (number | null)[]): TreeNode | null {
    if (!array.length) return null

    const arr = array.map(n => n !== null ? new TreeNode(n) : null)

    // children of empty node doesn't listed in array
    let offset = 0
    for (let i = 0; i < arr.length; i++) {
        const node = arr[i]
        if (!node) {
            offset += 2
            continue
        }
        node.left = arr[2 * i + 1 - offset] ?? null
        node.right = arr[2 * i + 2 - offset] ?? null
    }

    return arr[0]
}