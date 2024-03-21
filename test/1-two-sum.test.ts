import { twoSum } from "../src/two-sum";

describe('twoSum', () => {
    it('should return correct indices for a valid target', () => {
        const nums = [1,2];
        const target = 3;
        const expected = [0,1];
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(expected));
        const nums2 = [2, 7, 11, 15];
        const target2 = 9;
        const expected2 = [0,1];
        expect (twoSum(nums2, target2)).toEqual(expect.arrayContaining(expected2));
        const nums3 = [3, 2, 4];
        const target3 = 6;
        const expected3 = [2,1];
        expect (twoSum(nums3, target3)).toEqual(expect.arrayContaining(expected3));
    })
});

describe('twoSum shorthand tests', () => {
    test.each([
        [[1, 2], 3, [0, 1]],
        [[2, 7, 11, 15], 9, [0, 1]],
        [[3, 2, 4], 6, [2, 1]],
        [[3,3], 6, [0,1]],
        [[1,2,3,4,5], 6, [1,3]]
    ])('should return correct indices for a valid target', (nums, target, expected) => {
        expect(twoSum(nums, target)).toEqual(expect.arrayContaining(expected));
    });
});