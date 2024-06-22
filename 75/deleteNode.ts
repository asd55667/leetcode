import { TreeNode, array2TreeNode } from "./utils.js"

export default function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root?.val === key) {
        if (!root?.left && !root?.right) return null
        return merge(root.left, root.right)
    }
    traverse(root)
    return root

    function traverse(node: TreeNode | null, parent: TreeNode | null = null) {
        if (!node) return
        if (node.val > key) traverse(node.left, node)
        if (node.val < key) traverse(node.right, node)
        if (node.val === key) {
            const tree = merge(node.left, node.right)
            if (parent?.left?.val === node.val) {
                parent.left = tree
            }
            if (parent?.right?.val === node.val) {
                parent.right = tree
            }
        }

    }

    // insert left sub-tree to left side of right sub-tree
    function merge(tree1: TreeNode | null, tree2: TreeNode | null): TreeNode | null {
        if (!tree1) return tree2
        if (!tree2) return tree1

        if (!tree2.left) tree2.left = tree1
        else {
            const queue = [tree1]
            while (queue.length) {
                const node = queue.pop()
                node && insert(tree2.left, node)
                if (node?.left) {
                    queue.push(node.left)
                    node.left = null
                }
                if (node?.right) {
                    queue.push(node.right)
                    node.right = null
                }
            }
        }
        return tree2
    }

    function insert(root: TreeNode, node: TreeNode) {
        if (root.val > node.val) {
            if (root.left) insert(root.left, node)
            else root.left = node
        }
        if (root.val < node.val) {
            if (root.right) insert(root.right, node)
            else root.right = node
        }
    }
};

import.meta.vitest

const transform = {
    input: (input: [(number | null)[], number]) => [array2TreeNode(input[0]), input[1]],
    output: array2TreeNode
}

const example1 = [[5, 3, 6, 2, 4, null, 7], 3]
const example2 = [[5, 3, 6, 2, 4, null, 7], 0]
const example3 = [[], 0]
const example4 = [[0], 0]
const example5 = [[5, 3, 6, 2, 4, null, 7], 5]

const answer1 = [5, 4, 6, 2, null, null, 7]
const answer2 = [5, 3, 6, 2, 4, null, 7]
const answer3 = []
const answer4 = []
const answer5 = [6, 3, 7, 2, 4]