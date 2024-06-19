import { TreeNode, array2TreeNode } from "./utils.js"

export default function pathSum3(root: TreeNode | null, targetSum: number): number {
    let count = 0
    let id = 0
    const seen = new Map()
    const nodeMap = new WeakMap()
    const valSet = new Set()
    traverse(root)

    return count


    function sumPath(path: TreeNode[]) {
        if (valSet.size === 1 && path[0].val === targetSum && path.length > 1) return (1+path.length) * path.length / 2-path.length

        let count = 0

        const cache: number[] = []
        for (let i = 0; i < path.length; i++) {
            for (let j = 0; j < cache.length; j++) {
                cache[j] -= path[i].val
                if (cache[j] === 0) {
                    const id = path.slice(j, i + 1).map(node => nodeMap.get(node)).join('-')
                    if (!seen.has(id)) {
                        count += 1
                        seen.set(id, true)
                    }
                }
            }
            cache[i] = targetSum - path[i].val
        }

        return count
    }

    function traverse(node: TreeNode | null, path: TreeNode[] = []) {
        if (!node) return

        nodeMap.set(node, id++)
        valSet.add(node.val)
        if (node.val === targetSum) count += 1

        const i = path.length
        path.push(node)

        if (node.left) traverse(node.left, path)

        if (!node.left && !node.right) count += sumPath(path)

        path = path.slice(0, i + 1)

        if (node.right) traverse(node.right, path)
    }
};

import.meta.vitest

const transform = {
    input: (input: [(number | null)[], number]) => [array2TreeNode(input[0]), input[1]],
}

const example1 = [[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8]
const example2 = [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22]
const example3 = [[1], 1]
const example4 = [[1, 2], 0]
const example5 = [[1, -2, -3], 1]
const example6 = [[0, 1, 1], 1]
const example7 = [[1, 2, null, 3, null, 4, null, 5], 6]
const example8 = [[1, -2, -3, 1, 3, -2, null, -1], -1]

const answer1 = 3
const answer2 = 3
const answer3 = 1
const answer4 = 0
const answer5 = 1
const answer6 = 4
const answer7 = 1
const answer8 = 4