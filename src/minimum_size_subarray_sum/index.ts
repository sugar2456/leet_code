/**
 * 部分配列の長さを求める関数
 * 
 * [処理の流れ]  
 * 左のポインタ、合計の値を取得する変数、最小の長さを取得する変数を用意する
 * 右のポインタを配列の長さまでループする
 * 右のポインタの値を合計に加算する
 * 合計が目標の値以上になったら、最小の長さを更新する
 * 合計から左のポインタの値を引き、左のポインタを1つ進める
 * ループが終わったら、最小の長さを返す
 * 
 * @param target 目標の値
 * @param nums 数値配列
 * @returns 最小の部分配列の長さ
 */
export default function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};