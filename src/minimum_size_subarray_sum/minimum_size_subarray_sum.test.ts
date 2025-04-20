import minSubArrayLen from ".";

describe('minimumSizeSubarraySum', () => {
    it("正常系１", () => {
        const input = [2,3,1,2,4,3];
        const target = 7;
        const result = minSubArrayLen(target, input);
        const expected = 2;
        expect(result).toBe(expected);
    });
    it("正常系２", () => {
        const input = [1,4,4];
        const target = 4;
        const result = minSubArrayLen(target, input);
        const expected = 1;
        expect(result).toBe(expected);
    }
    );
    it("異常系", () => {
        const input = [1,1,1,1,1,1,1,1];
        const target = 11;
        const result = minSubArrayLen(target, input);
        const expected = 0;
        expect(result).toBe(expected);
    }
    );
});