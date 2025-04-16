import dailyTemperatures from ".";

describe("daily temperatures", () => {
    it("正常系パターン１", () => {
        const input = [73,74,75,71,69,72,76,73];
        const actual = dailyTemperatures(input);

        const expected = [1,1,4,2,1,1,0,0];

        expect(actual).toEqual(expected);
    });

    it("正常系パターン2", () => {
        const input = [30,40,50,60];
        const actual = dailyTemperatures(input);

        const expected = [1,1,1,0];

        expect(actual).toEqual(expected);
    });

    it("正常系パターン3", () => {
        const input = [30,60,90];
        const actual = dailyTemperatures(input);

        const expected = [1,1,0];

        expect(actual).toEqual(expected);
    });
})