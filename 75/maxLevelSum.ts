import { TreeNode, array2TreeNode } from "./utils.js"

export default function maxLevelSum(root: TreeNode | null): number {
    let max = Number.MIN_SAFE_INTEGER
    let maxLevel = 1
    traverse([root])
    return maxLevel

    function traverse(nodes: (TreeNode | null)[], level = 1) {
        if (!nodes.filter(Boolean).length) return
        const sum = nodes.reduce((prev, node) => prev + (node?.val ?? 0), 0)
        if (sum > max) {
            max = sum
            maxLevel = level
        }
        const arr = nodes.flatMap(node => [node?.left ?? null, node?.right ?? null]).filter(Boolean)

        if (arr.length) traverse(arr, level + 1)
    }
};

import.meta.vitest

const transform = {
    input: array2TreeNode,
}

const example1 = [1, 7, 0, 7, -8, null, null]
const example2 = [989, null, 10250, 98693, -89388, null, null, null, -32127]
const example3 = [-100, -200, -300, -20, -5, -10, null]

const answer1 = 2
const answer2 = 2
const answer3 = 3