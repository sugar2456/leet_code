// 問題
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1.
// 
// To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * マージ関数
 * 
 * [処理の流れ]  
 * 必要な部分だけ切り取り処理をする  
 * 切り取った配列に配列２を追加する  
 * 照準にソートする  
 * 
 * @param nums1 数字配列１
 * @param m 数値配列１の長さ
 * @param nums2 数字配列２
 * @param n 数字配列２の長さ
 */
export default function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // ここでm以降のインデックスの要素を削除する
    nums1.splice(m, nums1.length - m);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};