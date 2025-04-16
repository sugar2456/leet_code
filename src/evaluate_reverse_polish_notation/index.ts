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