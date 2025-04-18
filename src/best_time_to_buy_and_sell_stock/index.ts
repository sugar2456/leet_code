/**
 * 株価の最大数を取得する関数
 * 
 * [処理の流れ]  
 * 最小の価格と最大の利益の変数を初期化  
 * 株価の配列をループする  
 * 最小の価格から現在の価格を引き、利益を取得する  
 * すでに保存したい最大利益と今取得した利益とで比較して、  
 * 大きい方を残す  
 * すでに保存した最小価格と今取得した価格で比較して、  
 * 小さい方を残す  
 * 
 * @param prices 株価
 * @returns 
 */
export default function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // 現在の価格で売った場合の利益を計算
        const currentProfit = prices[i] - minPrice;
        // 最大利益を更新
        maxProfit = Math.max(maxProfit, currentProfit);
        // 最小価格を更新
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
};