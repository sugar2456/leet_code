export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;
    const mid = Math.floor((m + n) / 2);
    const isEven = ((m + n) % 2) === 0;
    const mergeArray = [...nums1, ...nums2].sort((a, b) => a - b);
    
    // 配列の要素の偶数の時
    if (isEven) {
        const center1 = mergeArray[mid - 1];
        const center2 = mergeArray[mid];
        return (center1 + center2) / 2;
    } else { // 奇数の時
        return mergeArray[mid];
    }
};