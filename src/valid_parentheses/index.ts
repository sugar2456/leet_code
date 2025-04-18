///問題
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * 括弧が閉じられているか判定する関数
 * 
 * [処理の流れ]  
 * カッコに対応する文字でマッピングする  
 * 入力の文字列を一文字づつループし、  
 * 開き括弧の場合はスタックに追加  
 * 閉じ括弧の場合はスタックの一番上の要素と比較し、  
 * 一致しなければfalseを返す  
 * ループが終了したら、スタックが空であればtrueを返す  
 * 
 * @param s カッコの文字列
 * @returns 括弧が閉じられているか否か
 */
export default function isValid(s: string): boolean {
    // 空のスタックを初期化
    const stack: string[] = [];
    
    // 対応する括弧のマッピングを作成
    const bracketsMap: {[key: string]: string} = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // 文字列の各文字を走査
    for (const char of s) {
        // 閉じ括弧の場合
        if (char in bracketsMap) {
            // スタックが空または対応する開き括弧がスタックの一番上にない場合
            if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
                return false;
            }
        } 
        // 開き括弧の場合
        else {
            // スタックに追加
            stack.push(char);
        }
    }
    
    // すべての開き括弧が閉じられているか（スタックが空か）をチェック
    return stack.length === 0;
};