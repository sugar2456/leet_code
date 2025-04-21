/**
 * 回文数かどうかを判定する関数
 * 
 * [処理の流れ]  
 * 数値の桁数を求める  
 * 1桁ならtrue  
 * 二桁以上なら数値を文字列にして、一文字づつループする
 * 配列の長さの半分になるまで一文字づつスタックに詰める、
 * その後、スタックからpopした値と、文字列の先頭から順に比較していく
 * 
 * @param x 検査対象の整数
 * @returns xが回文数であればtrue、そうでなければfalse
 */
export default function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

    const str = x.toString();
    const len = str.length;
    const stack: string[] = [];
    const half = Math.floor(len / 2);
    for (let i = 0; i < len; i++) {
        if (i < half) {
            stack.push(str[i]);
        } else if (i >= len - half) {
            if (stack.pop() !== str[i]) {
                return false;
            }
        }
    }

    return true;
}