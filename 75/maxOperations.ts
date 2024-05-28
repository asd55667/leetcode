export default function maxOperations(nums: number[], k: number): number {
    let l = 0
    let r = nums.length - 1

    let count = 0
    const map = Object.create(null)

    while (l < r) {
        if (nums[l] + nums[r] === k) {
            count += 1
            l += 1
            r -= 1
        } else {
            if (map[nums[l]] > 0) {
                map[nums[l]] -= 1
                count += 1
                l += 1
            } else if (map[nums[r]] > 0) {
                map[nums[r]] -= 1
                count += 1
                r -= 1
            } else {
                map[k - nums[l]] = (map[k - nums[l]] || 0) + 1
                map[k - nums[r]] = (map[k - nums[r]] || 0) + 1
                l += 1
                r -= 1
            }
        }
    }

    if (l === r && map[nums[l]]) count += 1

    return count
};

import.meta.vitest

const example1 = [[1, 2, 3, 4], 5]
const example2 = [[3, 1, 3, 4, 3], 6]
const example3 = [[2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3]
const example4 = [[48, 87, 82, 57, 69, 63, 33, 58, 71, 7, 44, 52, 81, 34, 68, 24, 20, 10, 3, 82, 59, 20, 59, 10, 66, 62, 51, 57, 3, 24, 10, 84, 3, 16, 77, 27, 90, 5, 35, 56, 27, 82, 21, 14, 20, 31, 23, 23, 15, 87, 73, 13, 8, 29, 27, 74, 80, 61, 77, 19, 10, 20, 4, 81, 74, 11, 63, 72, 77, 78, 32, 90, 77, 32, 85, 78, 48, 38, 63, 82, 69, 59, 85, 82, 43, 54, 44, 32, 71, 5, 69, 5, 42, 65, 61, 34, 13, 89, 76, 71, 77, 37, 6, 50, 53, 13, 30, 5, 86, 5, 88, 53, 23, 53, 38, 29, 83, 70, 36, 74, 68, 37, 15, 78, 17, 85], 12]

const answer1 = 2
const answer2 = 1
const answer3 = 4
const answer4 = 2