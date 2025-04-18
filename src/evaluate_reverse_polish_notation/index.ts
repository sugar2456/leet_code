/**
 * 逆ポーランド記法計算関数
 * 
 * [処理の流れ]  
 * 計算式を入れるスタック変数を初期化  
 * トークンを展開する  
 * 計算式の仕様上数値が最初に現れ、スタックされるはず  
 * 計算演算子（+-*`/）が表示されたら、  
 * スタックされた数値を取り出す  
 * 演算子にあった計算をする  
 * 計算結果をスタックに詰める  
 * ループが終了してトークンの解析結果が最後のスタックにあるので、  
 * 関数の返却値とする  
 * 
 * @param tokens 計算式
 * @returns 計算結果
 */
export default function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    
    for (const token of tokens) {
        if (token === '+') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(a + b);
        } else if (token === '-') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(a - b);
        } else if (token === '*') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(a * b);
        } else if (token === '/') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            // JavaScript/TypeScriptでの整数除算（小数点以下切り捨て）
            stack.push(Math.trunc(a / b));
        } else {
            // 数値の場合
            stack.push(parseInt(token));
        }
    }
    
    return stack[0];
};