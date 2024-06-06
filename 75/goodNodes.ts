import { TreeNode, array2TreeNode } from "./utils.js"

export default function goodNodes(root: TreeNode | null): number {
    if (!root) return 0

    let good = 0
    traverse(root, root.val)

    return good

    function traverse(node: TreeNode | null, max: number) {
        if (!node) return

        if (node.val >= max) {
            max = node.val
            good += 1
        }

        traverse(node.left, max)

        traverse(node.right, max)
    }
};
import.meta.vitest

const transform = {
    input: array2TreeNode,
}

const example1 = [3, 1, 4, 3, null, 1, 5]
const example2 = [3, 3, null, 4, 2]
const example3 = [1]

const answer1 = 4
const answer2 = 3
const answer3 = 1