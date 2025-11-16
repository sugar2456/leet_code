/**
 * 回文を取得する関数
 * @param s 文字列
 * @returns 回文の文字列
 */
export function longestPalindrome(s: string): string {
    if (s.length === 0) {
        return "";
    }

    let maxLength = 0;
    // 回文開始のインデックス
    let startPosition = 0;
    for (let i = 0; i < s.length; i++) {
        const oddlen = expandAroundCenter(i, i, s);
        const evenlen = expandAroundCenter(i, i + 1, s);
        const currentlen = Math.max(oddlen, evenlen);

        if (maxLength < currentlen) {
            maxLength = currentlen;
            // 回文の開始位置まで戻る
            startPosition = i - Math.floor((currentlen - 1) / 2);
        }
    }
    // 開始位置から終了位置まで切り取る
    return s.substring(startPosition, startPosition + maxLength);
};

/**
 * 指定したい力左右に広げるだけ広げて回文の長さを取得する
 * 偶数の回文を指定したいときはleftとrightで中心となる文字のインデックスを指定する必要がある
 * rightとleftは同じ、もしくは隣接していることが大前提となる
 * @param left 回文チェックの右の変数
 * @param right 回文チェックの左の変数
 * @param str 回文の文字列
 */
export function expandAroundCenter(left: number, right: number, str: string): number {
    if (right - left > 1) {
        throw new Error("left と right は隣接している必要があります");
    }
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        left -= 1;
        right += 1;
    }
    return right - left - 1;
}