import { assert } from "console";
import { singleNumber } from ".";

describe("singleNumberのテスト", () => {
    test("正常系：一般的なデータ", () => {
        const testData = [2, 2, 1];
        const expected = 1;
        const actual = singleNumber(testData);

        expect(actual).toEqual(expected);
    });
    test("正常系：より多くのデータ", () => {
        const testData = [4, 1, 2, 1, 2];
        const expected = 4;
        const actual = singleNumber(testData);

        expect(actual).toEqual(expected);
    });
    test("正常系：データが一つだけ", () => {
        const testData = [1];
        const expected = 1;
        const actual = singleNumber(testData);

        expect(actual).toEqual(expected);
    });
});