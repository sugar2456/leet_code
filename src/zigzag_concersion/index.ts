export function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows: string[] = Array.from({ length: numRows }, () => "");
    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];

        // 末端に着いたら方向転換する
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        if (goingDown) {
            currentRow++;
        } else {
            currentRow--;
        }
    }
    return rows.join('');
}; 