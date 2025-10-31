const row = [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1]
]
/**
 * 二項係数でパスカルを求める
 * @param rowIndex 行の高さ
 */
export default function getRow(rowIndex: number): number[] {
    const row = new Array(rowIndex + 1);
    row[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        row[i] = row[i - 1] * (rowIndex - i + 1) / i;
    }

    return row;
};
