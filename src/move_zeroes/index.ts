/**
 * 数値配列ないに0が存在すると後ろに移動する関数
 * 
 * [処理の流れ]  
 * 挿入する配列のインデックスを初期化  
 * 配列をループする  
 * 挿入が発生するとinsertPosをインクリメントする  
 * 挿入が終了したポジション以降は全て0で終わるので0で埋める  
 * 
 * @param nums 数値配列
 */
export default function moveZeroes(nums: number[]): void {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    nums.fill(0, insertPos);
}