/**
 * 2進数の文字列を足し算する関数
 * 
 * [処理の流れ]  
 * 桁上がり、結果、最大長さを初期化する  
 * 最大長の長さ分ループする  
 * 一番後ろの桁から足し算をする  
 * 結果は文字列の先頭に追加する  
 * 桁数が繰り上がったらフラグを立てる  
 * 最後に桁上がりのフラグが立っているなら  
 * 結果の先頭に追加する  
 * 
 * @param a 2進数の文字列
 * @param b 2進数の文字列
 * @returns 足し算した結果の2進数の文字列
 */
export default function addBinary(a: string, b: string): string {
    let carry = 0;
    let result = '';
    const maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        const bitA = a[a.length - 1 - i] ? parseInt(a[a.length - 1 - i]) : 0;
        const bitB = b[b.length - 1 - i] ? parseInt(b[b.length - 1 - i]) : 0;

        const sum = bitA + bitB + carry;
        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);
    }

    if (carry > 0) {
        result = carry.toString() + result;
    }

    return result;
}