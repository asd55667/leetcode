import { TreeNode, array2TreeNode } from "./utils.js"

export default function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const leaves1 = traverse(root1)
    const leaves2 = traverse(root2)
    if (leaves1.length !== leaves2.length) return false

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false
    }
    return true

    function traverse(tree: TreeNode | null, leaves: number[] = []) {
        if (!tree) return leaves
        if (!tree?.left && !tree?.right) leaves.push(tree!.val)

        traverse(tree.left, leaves)
        traverse(tree.right, leaves)

        return leaves
    }
};

import.meta.vitest

const transform = {
    input: (trees: number[][]) => trees.map(array2TreeNode),
}

const example1 = [[3, 5, 1, 6, 2, 9, 8, null, null, 7, 4], [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]]
const example2 = [[1, 2, 3], [1, 3, 2]]

const answer1 = true
const answer2 = false