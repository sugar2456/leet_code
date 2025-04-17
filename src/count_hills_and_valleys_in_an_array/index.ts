// 数列の丘と谷をカウントする関数
// 
// [処理]
// カウンターを初期化
// 入力の数列をindex1からスタートしてループする
// 現在のインデックスと次のインデックスを比較する
// 一致しているならスキップ
// 現在のインデックスから前の要素を不一致になるまでループで探索する
// 現在のインデックスから次の要素を不一致になるまでループで探索する
// 上記の探索で配列のインデックスの範囲を超えるようならスキップ
// 丘になるもしくは谷になるパターンになるならカウンターを上げる
export default function countHillValley(nums: number[]): number {
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            continue;
        }
        // 現在のインデックスの一つ前からスタート
        let left = i - 1;
        while(left > 0 && nums[left] === nums[i]) {
            left--;
        }

        let right = i + 1;
        while(right < nums.length && nums[right] === nums[i]) {
            right++;
        }

        if (left < 0 || right >= nums.length) continue;

        if (
            (nums[i] > nums[left] && nums[i] > nums[right])
            ||
            (nums[i] < nums[left] && nums[i] < nums[right])
        ) {
            count++;
        }
    }
    return count;
}