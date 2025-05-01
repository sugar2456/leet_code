/**
 * 平方根を求める関数
 *
 * [処理の流れ]
 *
 * @param x 平方根を求める数
 */
export default function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Negative input is not allowed");
  }
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
