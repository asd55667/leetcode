export default function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [asteroids[0]]
    for (let i = 1; i < asteroids.length; i++) {
        if (collide(asteroids[i])) stack.push(asteroids[i])
    }

    function collide(asteroid: number) {
        const cur = stack[stack.length - 1]
        if (!cur) return true
        else {
            if (cur > 0 && asteroid < 0) {
                const result = Math.abs(asteroid) - Math.abs(cur)
                if (result === 0) stack.pop()
                if (result > 0) {
                    stack.pop()
                    if (collide(asteroid)) return true
                }
            } else return true
        }
        return false
    }

    return stack
};

import.meta.vitest

const example1 = [5, 10, -5]
const example2 = [8, -8]
const example3 = [10, 2, -5]
const example4 = [-2, -1, 1, 2]

const answer1 = [5, 10]
const answer2 = []
const answer3 = [10]
const answer4 = [-2, -1, 1, 2]
