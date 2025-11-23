/**
 * 正規表現による比較関数
 * 
 * '.'はいずれかの文字列
 * '*'は直前の要素に0回以上繰り返していること
 * 
 * @param s 比較対象の文字列
 * @param p 検索文字列
 * @returns 一致するかどうか？
 */
export function isMatch(s: string, p: string): boolean {
    const m = s.length;
    const n = p.length;

    // dp[i][j] = s[0...i-1] と p[0...j-1] がマッチするか
    const dp: boolean[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // ベースケース：空文字列同士はマッチ
    dp[0][0] = true;

    // s が空で、p が "a*b*c*" のようなパターンの場合の初期化
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // DPテーブルを埋める
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const sChar = s[i - 1];
            const pChar = p[j - 1];

            if (pChar === '*') {
                // "*" の処理
                const prevPChar = p[j - 2];

                // ケース1: "*" を0回マッチとしてスキップ
                dp[i][j] = dp[i][j - 2];

                // ケース2: "*" を1回以上マッチ
                if (prevPChar === sChar || prevPChar === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            } else if (pChar === '.' || pChar === sChar) {
                // 普通の文字マッチまたは "."
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};