/**
 * ローマ数字を整数に変換する関数
 * 
 * [処理の流れ]  
 * ローマ数字と整数の値をマッピング  
 * 総合と前の数字を格納する変数を用意  
 * for文でローマ数字を1文字ずつ読み取る  
 * 現在のローマ数字を取り出す  
 * 値が前の数字より小さい場合は引き算  
 * それ以外は足し算  
 * 前の数字を現在の数字に更新  
 * 合計を返す  
 * 
 * @param s - ローマ数字の文字列
 * @returns - 数値
 */
export default function romanToInt(s: string): number {
  const romanNumerals: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[s[i]];

    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    prevValue = currentValue;
  }

  return total;
}
