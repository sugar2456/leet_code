/**
 * アラビア数字をローマ数字に変換する関数
 * 数字の桁ごとに評価するのがいいみたい
 * @param num アラビア数字
 */
export function intToRoman(num: number): string {
    // 値とシンボルのペアを大きい順に定義
    const values: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let result: string = "";
    
    for (let i = 0; i < values.length; i++) {
        // 現在の値で割れる回数を計算
        // 例）3400なら1000が3回分割れる
        const count = Math.floor(num / values[i]);
        
        if (count > 0) {
            // シンボルをcount回繰り返して追加
            result += symbols[i].repeat(count);
            // numから使った分を引く
            num -= values[i] * count;
        }
    }
    
    return result;
};