// 中間探索関数
//


/**
 * バイナリサーチ関数
 * 
 * [処理の流れ]  
 * 探索する配列の最初と最後のインデックスを取得する  
 * 取得したインデックスの中間を割り出す  
 * 中間インデックスで探索対象の配列の値を取得する  
 * 中間インデックスの値がターゲットの値より大きければ、後ろの配列を探索  
 * 中間インデックスの値がターゲットの値より小さければ、前の配列を探索  
 * 
 * @param nums 検索対象の数値配列
 * @param target 検索数値
 * @returns 
 */
export default function search(nums: number[], target: number): number {
  let startIndex = 0;
  let lastIndex = nums.length - 1;

  while (startIndex <= lastIndex) {
    const midIndex = startIndex + Math.floor((lastIndex - startIndex) / 2);

    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] > target) {
      // 中間よりターゲットの値が小さい
      lastIndex = midIndex - 1;
    } else {
      // 中間よりターゲットの値が大きい
      startIndex = midIndex + 1;
    }
  }
  return -1;
}
