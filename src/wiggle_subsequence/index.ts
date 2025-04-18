/**
 * Wiggle Subsequence
 * 
 * [処理の流れ]  
 * 配列が二つ以上存在しないなら配列の長さ（1）を返却する  
 * カウンターup/downを定義  
 * 配列でループする  
 * 一つ前の要素と比較する  
 * 大きい場合：上昇しているのでupカウント（down + 1）をする  
 * 小さい場合：下降しているのでdownカウント（up + 1）をする  
 * up/downで比較して大きい方を返却する  
 * 
 * @param nums 数値配列
 * @returns 数値の上下があった長さ
 */
export default function wiggleMaxLength(nums: number[]): number {
    if (nums.length < 2) return nums.length;

    let up = 1;
    let down = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            up = down + 1;
        } else if (nums[i] > nums[i - 1]) {
            down = up + 1;
        }
    }
    return Math.max(up, down);
}