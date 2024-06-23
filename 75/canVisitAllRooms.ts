export default function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Array(rooms.length).fill(false)
    const keys = new Set([0])

    let allVisited = Array.from(keys).every(key => visited[key])
    while (!allVisited) {
        keys.forEach(key => {
            if (!visited[key]) {
                rooms[key].forEach(key => keys.add(key))
                visited[key] = true
            }
        })

        allVisited = Array.from(keys).every(key => visited[key])
    }

    return !visited.includes(false)
};

import.meta.vitest

const example1 = [[1], [2], [3], []]
const example2 = [[1, 3], [3, 0, 1], [2], [0]]
const example3 = [[2], [], [1]]

const answer1 = true
const answer2 = false
const answer3 = true