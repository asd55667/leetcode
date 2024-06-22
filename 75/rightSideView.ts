import { TreeNode, array2TreeNode } from "./utils.js"

export default function rightSideView(root: TreeNode | null): number[] {
    const output: number[] = []
    traverse([root])
    return output

    function traverse(nodes: (TreeNode | null)[]) {
        if (!nodes.filter(Boolean).length) return
        output.push(nodes[nodes.length - 1]?.val!)
        const arr = nodes.flatMap(node => [node?.left ?? null, node?.right ?? null]).filter(Boolean)
        if (arr.length) traverse(arr)
    }
};

import.meta.vitest

const transform = {
    input: array2TreeNode,
}

const example1 = [1, 2, 3, null, 5, null, 4]
const example2 = [1, null, 3]
const example3 = []

const answer1 = [1, 3, 4]
const answer2 = [1, 3]
const answer3 = []