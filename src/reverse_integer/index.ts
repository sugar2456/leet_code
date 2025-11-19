/**
 * 整数の桁を反転する
 * @param x 整数
 */
export function reverse(x: number): number {
    let strInputX = "";
    let isNegative = false;
    strInputX = x.toString();
    if (0 > x) {
        strInputX = strInputX.substring(1)
        isNegative = true;
    }
    let reverseX = "";
    for(let i = strInputX.length - 1; 0 <= i ; i--) {
        reverseX += strInputX[i];
    }
    if (isNegative) {
        reverseX = "-" + reverseX;
    }
    const result = Number(reverseX);
    
    // 32ビット整数の範囲チェック
    const INT_MAX = 2147483647;  // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31
    
    if (result > INT_MAX || result < INT_MIN) {
        return 0;
    }
    
    return result;
};