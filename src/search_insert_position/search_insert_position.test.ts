import searchInsert from ".";

describe("search_insert_position", () => {
    it("正常系１", () => {
        const nums = [1, 3, 5, 6];
        const target = 5;
        const expectedResult = 2;

        const result = searchInsert(nums, target);

        expect(result).toEqual(expectedResult);
    }
    );
    it("正常系２", () => {
        const nums = [1, 3, 5, 6];
        const target = 2;
        const expectedResult = 1;

        const result = searchInsert(nums, target);

        expect(result).toEqual(expectedResult);
    }
    );
    it("正常系３", () => {
        const nums = [1, 3, 5, 6];
        const target = 7;
        const expectedResult = 4;

        const result = searchInsert(nums, target);

        expect(result).toEqual(expectedResult);
    }
    );
    it("正常系４", () => {
        const nums = [1, 3, 5, 6];
        const target = 0;
        const expectedResult = 0;

        const result = searchInsert(nums, target);

        expect(result).toEqual(expectedResult);
    }
    );
});