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