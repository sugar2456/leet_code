// 問題
// Given an integer array nums, find the subarray with the largest sum, and return its sum.

/**
 * 最大SubArray取得関数
 * 
 * [処理の流れ]  
 * 現在の合計を格納する変数を配列の最初の値で初期化する  
 * 最大値を格納する変数を配列の最初の値で初期化する  
 * 配列の長さでループを回す  
 * 配列にはマイナスの値も含まれるので、  
 * 前回までの合計値と現在の配列と比較して現在の配列のみの方が大きくなることもあるので、  
 * 大きい方を現在の合計とする  
 * 現在の合計と全体の合計を比較して大きい方を残す  
 * 
 * @param nums 最大配列引数
 * @returns 
 */
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