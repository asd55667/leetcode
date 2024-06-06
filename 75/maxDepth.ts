import { TreeNode, array2TreeNode } from "./utils.js"

export default function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    const l = maxDepth(root.left) + 1
    const r = maxDepth(root.right) + 1

    return Math.max(l, r)
};

import.meta.vitest

const transform = {
    input: array2TreeNode,
}

const example1 = [3, 9, 20, null, null, 15, 7]
const example2 = [1, null, 2]

const answer1 = 3
const answer2 = 2