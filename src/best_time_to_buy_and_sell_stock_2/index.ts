/**
 * 株価の最大利益を計算する関数
 * 
 * [処理の流れ]  
 * 利益の変数を0で初期化  
 * 株価の配列をループ処理する  
 * ループの中で、前日の株価よりも今日の株価が高ければ、利益を加算する  
 * ループが終わったら、利益を返す  
 * 
 * @param prices 株価の配列
 * @returns 最大利益
 */
export default function maxProfit(prices: number[]): number {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // 価格が上昇する区間があれば利益を加える
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    
    return profit;
};