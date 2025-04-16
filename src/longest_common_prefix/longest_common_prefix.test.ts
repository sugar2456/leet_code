import longestCommonPrefix from '.';

describe('Longest Common Prefix', () => {
  test('should return the longest common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('should return empty string when there is no common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  test('should return the single string when array has only one element', () => {
    expect(longestCommonPrefix(['a'])).toBe('a');
  });

  test('should return empty string for empty array', () => {
    expect(longestCommonPrefix([])).toBe('');
  });

  test('should handle partial common prefix', () => {
    expect(longestCommonPrefix(['ab', 'a'])).toBe('a');
  });
});