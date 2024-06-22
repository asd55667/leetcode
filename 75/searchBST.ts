import { TreeNode, array2TreeNode } from "./utils.js"

export default function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let targetNode = null
    traverse(root)
    return targetNode

    function traverse(node: TreeNode | null) {
        if (!node) return
        if (node.val === val) targetNode = node
        if (node.val > val) traverse(node.left)
        if (node.val < val) traverse(node.right)
    }
};

import.meta.vitest

const transform = {
    input: (input: [(number | null)[], number]) => [array2TreeNode(input[0]), input[1]],
    output: array2TreeNode
}

const example1 = [[4, 2, 7, 1, 3], 2]
const example2 = [[4, 2, 7, 1, 3], 5]

const answer1 = [2, 1, 3]
const answer2 = []