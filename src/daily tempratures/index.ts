/**
 * 現在の気温より高い温度になる日付を取得する関数
 *
 * [処理の流れ]
 * 入力された配列の長さを求める  
 * 配列長で0で埋める  
 * 配列をループ  
 * インデックスをスタックに詰め込む  
 * スタックが存在するかつ温度がスタックされた温度より高い  
 * スタックからインデックスを取り出す  
 * 現在のインデックスとスタックされたインデックスの差が日付になる  
 * 
 * @param temperatures 気温
 * @returns 任意の日付にて気温が超えるまでにかかった日数の数値配列
 */
export default function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack: number[] = []; // インデックスを格納するスタック
    
    // 配列を順に走査
    for (let i = 0; i < n; i++) {
        // スタックが空でなく、現在の温度が過去の温度よりも高い間
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()!;
            answer[prevIndex] = i - prevIndex; // 日数の差を計算
        }
        
        // 現在のインデックスをスタックに追加
        stack.push(i);
    }
    
    return answer;
};