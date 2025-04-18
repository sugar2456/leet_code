// 問題
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * targetの値を2つの数値の和として持つインデックスを返す関数
 * 
 * [処理の流れ]  
 * 数値の配列をループし、  
 * 配列の値とそのインデックスをハッシュマップに保存、  
 * その後、現在の数値と合わせてtargetになる数値を計算し、  
 * その数値がハッシュマップに存在するかを確認します。  
 * 存在すれば、そのインデックスを返します。  
 * 存在しなければ、現在の数値とそのインデックスをハッシュマップに保存します。  
 * 
 * @param nums 数値配列
 * @param target 合計数値
 * @returns 
 */
export default function twoSum(nums: number[], target: number): number[] {
    // 値からインデックスへのマッピングを保存するためのハッシュマップ
    const numMap = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        // 現在の数値と合わせてtargetになる数値
        const complement = target - nums[i];
        
        // もし補数がマップに存在すれば、答えを返す
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        
        // 現在の数値とそのインデックスをマップに保存
        numMap.set(nums[i], i);
    }
    
    // 解がない場合（問題の制約上、常に一つの解があるため実行されない）
    return [];
};