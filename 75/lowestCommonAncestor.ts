import { TreeNode, array2TreeNode } from "./utils.js"

export default function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null | number {
    let node = root

    if (isParent(p, q)) node = p
    else if (isParent(q, p)) node = q
    else {
        const [pp, qq] = traverse(root)
        if (pp) return lowestCommonAncestor(root, pp, q)
        if (qq) return lowestCommonAncestor(root, p, qq)
    }

    return node?.val!
    // output in leetcode
    return node

    function traverse(node: TreeNode | null): [TreeNode | null, TreeNode | null] {
        if (!node) return [null, null]
        const l = traverse(node.left)
        if (l[0] || l[1]) return l
        const r = traverse(node.right)
        if (r[0] || r[1]) return r

        if (isParent(node, p)) return [node, null]
        if (isParent(node, q)) return [null, node]
        return [null, null]
    }

    function isParent(p: TreeNode | null, c: TreeNode | null) {
        if (!p || !c) return false

        return p.left?.val === c.val || p.right?.val === c.val
    }
};


import.meta.vitest

const transform = {
    input: (args: [number[], number, number]) => {
        const tree = array2TreeNode(args[0])
        let node1
        let node2
        traverse(tree)
        return [tree, node1, node2]

        function traverse(node: TreeNode | null) {
            if (!node) return
            if (node.val === args[1]) node1 = node
            if (node.val === args[2]) node2 = node
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
    },
}

const example1 = [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1]
const example2 = [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4]
const example3 = [[1, 2], 1, 2]

const answer1 = 3
const answer2 = 5
const answer3 = 1