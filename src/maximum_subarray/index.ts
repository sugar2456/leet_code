export default function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 前までの合計がマイナスなら切り捨てて、新しくスタート
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // 最大値を更新
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};