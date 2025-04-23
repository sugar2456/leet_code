/**
 * 重複排除関数
 * 
 * [処理の流れ]  
 * 重複を取り除いた配列の長さをカウントする変数を初期化する  
 * 配列をループ  
 * 現在の要素と次の要素を比較し、異なっていたら元の要素を更新する  
 * 重複を取り除いた配列の長さをカウントする変数をインクリメントする  
 * ループ終了後、重複を取り除いた配列の長さを返す　　
 * 
 * 問題では入力配列の更新を求められているので、  
 * このような書き方をしているが、  
 * 実際にはSetを使って配列のコピーに対して  
 * 重複を取り除く。  
 * 
 * @param nums 重複を含むソート済み配列
 * @returns 重複を取り除いた配列の長さ
 */
export default function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
