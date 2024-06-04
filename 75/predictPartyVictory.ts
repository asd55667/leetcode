export default function predictPartyVictory(senate: string): string {
    const queue: (string | number)[] = []
    for (const senator of senate) {
        check(senator, true)
    }

    let n = queue.pop() as number
    const last = queue[queue.length - 1]
    while (n) {
        const idx = queue.findIndex(v => v !== last)
        if (idx !== -1) queue.splice(idx, 1)
        n -= 1
    }

    if (queue.includes('R') && queue.includes('D')) {
        return predictPartyVictory(queue.join(''))
    } else return queue[0] === "R" ? 'Radiant' : 'Dire'

    function check(senator: string, vote: boolean) {
        const n = queue.pop() as number | undefined
        if (typeof n === 'undefined') {
            queue.push(senator)
            queue.push(1)
            return
        }

        const last = queue[queue.length - 1]
        if (last === senator) {
            queue.push(senator)
            queue.push(n + 1)
        } else {
            if (n === 0) {
                queue.push(senator)
                queue.push(1)
            } else {
                queue.push(n - 1)
            }
        }
    }
};

import.meta.vitest

const example1 = "RD"
const example2 = "RDD"
const example3 = "RRDDD"
const example4 = "DDRRRR"
const example5 = "RRR"
const example6 = "DRRD"

const answer1 = "Radiant"
const answer2 = "Dire"
const answer3 = "Radiant"
const answer4 = "Radiant"
const answer5 = "Radiant"
const answer6 = "Dire"