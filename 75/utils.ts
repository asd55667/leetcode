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