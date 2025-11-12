import { lengthOfLongestSubstring } from ".";

describe('Longest Substring Without Repeating Characters', () => {
  test('正常系：パターン１', () => {
    const data = 'abcabcbb';
    const expoect = 3
    expect(lengthOfLongestSubstring(data)).toBe(expoect);
  });
  test('正常系：パターン2', () => {
    const data = 'bbbbb';
    const expoect = 1
    expect(lengthOfLongestSubstring(data)).toBe(expoect);
  });
  test('正常系：パターン3', () => {
    const data = 'pwwkew';
    const expoect = 3
    expect(lengthOfLongestSubstring(data)).toBe(expoect);
  });
});