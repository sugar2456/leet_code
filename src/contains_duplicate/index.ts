export default function containsDuplicate(nums: number[]): boolean {
    if (nums.length === 0) {
        return false;
    }

    const memo = new Set<number>;

    for (let i = 0; i < nums.length; i++) {
        if (memo.has(nums[i])) {
            return true;
        }
        memo.add(nums[i]);
    }
    return false;
}