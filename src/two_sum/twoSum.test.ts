import twoSum from '.';

describe('Two Sum', () => {
  test('should return indices of two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  test('should handle negative numbers', () => {
    expect(twoSum([3, -3, 4, -1], 0)).toEqual(expect.arrayContaining([0, 1]));
  });

  test('should handle multiple occurrences of the same number', () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });

  test('should handle larger arrays', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19)).toEqual(expect.arrayContaining([8, 9]));
  });
});