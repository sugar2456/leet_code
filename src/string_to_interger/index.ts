/**
 * 入力文字を数字に変換する関数
 * 
 * 空白は無視する
 * 符号を検知する、ない場合は正にする
 * 文字列で数字を検知できなかったら0にする
 * 先頭のゼロは読み飛ばす
 * -2の31乗から2の31乗-1の値の範囲になるように丸め込む
 * @param s 文字列　数字やアルファベットが混合で入ってくる
 */
export function myAtoi(s: string): number {
    const MIN_32_BIT_INTEGER = -2147483648;
    const MAX_32_BIT_INTEGER = 2147483647;
    if (s.length === 0) {
        return 0;
    }
    const trimStr = s.trim();
    let parseResult = parseInt(trimStr);
    if (isNaN(parseResult)) {
        return 0;
    }
    // 丸め処理
    if (parseResult < MIN_32_BIT_INTEGER) {
        parseResult = MIN_32_BIT_INTEGER;
    }
    if (parseResult > MAX_32_BIT_INTEGER) {
        parseResult = MAX_32_BIT_INTEGER;
    }
    return parseResult;
};