/**
 * 配列の中からユニークな値を検索する関数
 * @param nums 数値の配列
 */
// export function singleNumber(nums: number[]): number {
//     // 値と出現回数のハッシュマップ
//     let hashMap = new Map<number, number>();
//     for (const num of nums) {
//         hashMap.set(num, (hashMap.get(num) || 0) + 1);
//     }

//     for (const [num, count] of hashMap.entries()) {
//         if (count === 1) {
//             return num;
//         }
//     }

//     return 0;
// };
export function singleNumber(nums: number[]): number {
    let result = 0;

    for (const num of nums) {
        result ^= num;
    }

    return result;
};