import evalRPN from ".";

describe("逆ポーランド記法　テスト", () => {
    it("パターン１", () => {
        const input = ["2","1","+","3","*"];
        const expectedValue = 9;

        const actual = evalRPN(input);
        expect(actual).toBe(expectedValue);
    });
    it("パターン２", () => {
        const input = ["4","13","5","/","+"];
        const expectedValue = 6;

        const actual = evalRPN(input);
        expect(actual).toBe(expectedValue);
    });
    it("パターン3", () => {
        const input = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
        const expectedValue = 22;

        const actual = evalRPN(input);
        expect(actual).toBe(expectedValue);
    });
});