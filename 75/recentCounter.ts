class RecentCounter {
    calls: number[] = []
    constructor() {

    }

    ping(t: number): number {
        this.calls.push(t)
        const n = t - 3000
        const idx = this.calls.findIndex(call => call >= n)
        return this.calls.length - idx
    }
}

export default function recentCounter(calls: number[][]): number[] {
    const counter = new RecentCounter()
    const output: number[] = []
    for (const call of calls) {
        for (const c of call) {
            output.push(counter.ping(c))
        }
    }
    return output
}

import.meta.vitest

const example1 = [[1], [100], [3001], [3002]]

const answer1 = [1, 2, 3, 3]