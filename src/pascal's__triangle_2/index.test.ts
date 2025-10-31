import getRow from '.';

const testCases = [
  {
    input: 0,
    expected: [1],
    description: "最初の行（1要素のみ）"
  },
  {
    input: 1,
    expected: [1, 1],
    description: "2番目の行"
  },
  {
    input: 2,
    expected: [1, 2, 1],
    description: "3番目の行"
  },
  {
    input: 3,
    expected: [1, 3, 3, 1],
    description: "4番目の行"
  },
  {
    input: 4,
    expected: [1, 4, 6, 4, 1],
    description: "5番目の行"
  },
  {
    input: 5,
    expected: [1, 5, 10, 10, 5, 1],
    description: "6番目の行"
  },
  {
    input: 10,
    expected: [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1],
    description: "11番目の行（中程度のサイズ）"
  },
  {
    input: 15,
    expected: [1, 15, 105, 455, 1365, 3003, 5005, 6435, 6435, 5005, 3003, 1365, 455, 105, 15, 1],
    description: "16番目の行（大きめのサイズ）"
  },
  {
    input: 20,
    expected: [1, 20, 190, 1140, 4845, 15504, 38760, 77520, 125970, 167960, 184756, 167960, 125970, 77520, 38760, 15504, 4845, 1140, 190, 20, 1],
    description: "21番目の行（エッジケース）"
  }
];

describe('getRowのテスト', () => {
    it('テストを実行', () => {
        testCases.forEach((v) => {
            expect(getRow(v.input)).toEqual(v.expected);
        })
    });
});