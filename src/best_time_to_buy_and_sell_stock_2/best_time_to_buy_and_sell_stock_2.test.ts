import maxProfit from ".";

describe('Best Time to Buy and Sell Stock II', () => {
    it('should return the maximum profit for the given prices', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const expectedProfit = 7; // Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4
        // Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3
        // Total profit = 4 + 3 = 7
        expect(maxProfit(prices)).toBe(expectedProfit);
    }
    );
    it('should return 0 if prices are in descending order', () => {
        const prices = [7, 6, 4, 3, 1];
        const expectedProfit = 0; // No transactions can be made
        expect(maxProfit(prices)).toBe(expectedProfit);
    }
    );
    it('should return 0 if prices are the same', () => {
        const prices = [5, 5, 5, 5, 5];
        const expectedProfit = 0; // No transactions can be made
        expect(maxProfit(prices)).toBe(expectedProfit);
    }
    );
    it('should return the maximum profit for an empty array', () => {
        const prices: number[] = [];
        const expectedProfit = 0; // No transactions can be made
        expect(maxProfit(prices)).toBe(expectedProfit);
    }
    );
    it('should return the maximum profit for a single price', () => {
        const prices = [5];
        const expectedProfit = 0; // No transactions can be made
        expect(maxProfit(prices)).toBe(expectedProfit);
    }
    );
});