
/**
 * 3要素のトータルが0になる関数
 * 
 * [処理の流れ]  
 * 入力配列をソート
 * 入力配列をループ
 * 一つ前の要素をチェックし、値が一緒なら次の処理に進む
 * 現在のインデックスの次のインデックスと左に設定
 * 入力配列の一番最後のインデックスを右に設定
 * 左が右のインデックスより超えるまでループ
 * 三つのインデックスで配列から値を取り出す
 * トータルが0になるなら結果の配列に値をプッシュ
 * 重複をチェックして、重複するようなら左右それぞれのインデックスをずらす
 * トータルが0より小さいなら左のポインタを右にずらす
 * ※配列が右側の方が大きいので、トータルを大きくする
 * トータルが0より大きいなら右のポインタを左にずらす
 * ※配列が左側の方が小さいので、トータルが小さくなる
 * 
 * @param nums 数値配列
 */
export default function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    
    // 配列をソート
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // 重複をスキップ
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // 重複をスキップ
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // 合計を増やすために左ポインタを右に動かす
            } else {
                right--; // 合計を減らすために右ポインタを左に動かす
            }
        }
    }

    return result;
}