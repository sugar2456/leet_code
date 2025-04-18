// ピークがあるインデックスを取得する関数
// 
// [処理の流れ]
// 探索する配列の両端のインデックスを取得する
// 両端のインデックスを判定しながらループする
// 探索両端の中間インデックスを取得する
// もし次の値が中間の値より小さい場合、
// 左側にピークがあるので、
// 探索最後尾を中間のインデックスにする
// 次の値が中間の値より大きい場合、
// 右側にピークがあるので、
// 探索の開始地点を中間より一つ前にする
export default function peakIndexInMountainArray(arr: number[]): number {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}