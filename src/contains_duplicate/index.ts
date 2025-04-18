/**
 * 重複判定関数
 * 
 * [処理の流れ]  
 * 数値配列の長さが0なら重複はありえないのでfalseを返却する  
 * メモ用の変数を初期化  
 * 入力の数値配列をループする  
 * メモに現在の値が存在するかチェックする  
 * 現在の値をメモに追加する  
 * 何もメモに値がヒットしないなら重複は存在しないので、  
 * falseを返却する
 * 
 * @param nums 数値配列
 * @returns 重複を含むか否か
 */
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