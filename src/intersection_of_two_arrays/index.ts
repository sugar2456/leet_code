/**
 * パラメータの二つの配列に共通する要素を返却する関数
 *
 * [処理の流れ]  
 * 二つの配列で長い配列と短い配列を判定する  
 * 短い配列をメモする  
 * 結果格納用の配列を作成する  
 * 長い配列をループで回して、  
 * 短い配列に同じ文字があるかチェックする  
 * 存在する場合、結果格納用の配列にプッシュする  
 * 
 * @param nums1 数値配列１
 * @param nums2 数値配列２
 * @returns 
 */
export default function intersection(nums1: number[], nums2: number[]): number[] {
    const [smaller, larger] = nums1.length <= nums2.length 
      ? [nums1, nums2] 
      : [nums2, nums1];
      
    // 小さい方の配列からSetを直接作成（一度のループで済む）
    const memo = new Set(smaller);

    // 結果格納用のSet（重複を自動的に排除）
    const resultSet = new Set<number>();

    // 大きい方の配列から共通要素を見つける
    for (let i = 0; i < larger.length; i++) {
        if (memo.has(larger[i])) {
            resultSet.add(larger[i]);
        }
    }
    // 結果をArrayに変換
    return Array.from(resultSet);
  };
  