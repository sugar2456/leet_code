/**
 * 二分探索を用いて、ソートされた配列におけるターゲットの挿入位置を見つける関数
 * 計算量: O(log n)
 * 
 * [処理の流れ]  
 * 
 * 左右のポインタを初期化  
 * 左のポインタが右のポインタを超えるまでループ  
 * 中間を計算  
 * ターゲットが中間と一致したら、中間インデックスを返す  
 * ターゲットが中間より大きい場合、左ポインタを中間+1に更新  
 * ターゲットが中間より小さい場合、右ポインタを中間-1に更新  
 * 
 * @param nums 入力の配列
 * @param target 探索目的の値
 * @returns インデックス
 */
export default function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// 線形探索のコードこれでは計算量がO(n)になってしまう
// function searchInsert(nums: number[], target: number): number {
//   let tmp = 0;
//   for(let i = 0; i < nums.length; i++) {
//       if (nums[i] === target) {
//           return i;
//       } else if (nums[i] > target) {
//           return i;
//       }
//   }
//   return nums.length;
// };