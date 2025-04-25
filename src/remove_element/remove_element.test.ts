import removeElement from ".";

describe("remove_element", () => {
  it("should remove elements from an array", () => {
    const arr = [1, 2, 3, 4, 5];
    const elementToRemove = 3;
    const expectedResult = 4;

    const result = removeElement(arr, elementToRemove);

    expect(result).toEqual(expectedResult);
  });

  it("should return the same array if the element is not found", () => {
    const arr = [1, 2, 3, 3];
    const elementToRemove = 3;
    const expectedResult = 2;

    const result = removeElement(arr, elementToRemove);

    expect(result).toEqual(expectedResult);
  });
});
