/**
 * 最大金額計算
 * 
 * [処理の流れ]  
 * 入力配列の長さを取得  
 * 家が0件なら稼ぎはない  
 * 家が一軒ならその家の金額を取得  
 * 入力配列の長さで動的計画法用の変数を初期化  
 * 最初と1軒目の家の場合のみ固定で計算する  
 * 二軒目以降はループで計算する  
 * 現在のインデックスの家から取得すると二つ前の家から取得した金額と合算する  
 * 現在の家から取らないで隣家から取得するパターンもある  
 * 上記二つのパターンで大きい金額の方を動的計画方の変数に格納する  
 * n-1のdpに最大の値が入っているので返却する
 * 
 * @param nums 家に保管してある金額
 * @returns 最大値
 */
export default function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const dp = new Array(n).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[n - 1];
};
