export function twoSum(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]
        } 
        map[nums[i]] = i;
        console.log(map)
    }
    throw new Error("no solution")
};
