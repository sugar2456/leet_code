import MinStack from ".";

describe("Min Stack", () => {
    it("パターン１", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        const actual = minStack.getMin();
        const expected = -3;

        expect(actual).toBe(expected);
    });

    it("パターン２", () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        minStack.pop();
        minStack.top();
        const actual = minStack.getMin();
        const expected = -2;

        expect(actual).toBe(expected);
    });
});