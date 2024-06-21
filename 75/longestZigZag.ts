import { TreeNode, array2TreeNode } from "./utils.js"

export default function longestZigZag(root: TreeNode | null): number {
    const cache = new WeakMap<TreeNode, [number, number]>()

    return traverse(root)

    function traverse(node: TreeNode | null): number {
        if (!node) return 0

        let max = 0

        if (node.left) {
            max = Math.max(zigzag(node.left, 1) + 1, traverse(node.left))
        }
        if (node.right) {
            max = Math.max(max, zigzag(node.right, 0) + 1, traverse(node.right))
        }
        return max
    }

    function zigzag(node: TreeNode | null, direction: 0 | 1): number {
        if (!node) return 0
        const cached = cache.get(node) ?? [0, 0]
        if (cached[direction]) return cached[direction]

        let n = 0
        if (direction && node.right) n = zigzag(node.right, 0) + 1

        if (!direction && node.left) n = zigzag(node.left, 1) + 1

        cached[direction] = n
        cache.set(node, cached)
        return n
    }
};

import.meta.vitest

const transform = {
    input: array2TreeNode,
}

const example1 = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]
const example2 = [1, 1, 1, null, 1, null, null, 1, 1, null, 1]
const example3 = [1]

const answer1 = 3
const answer2 = 4
const answer3 = 0