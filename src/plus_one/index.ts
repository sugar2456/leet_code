export default function plusOne(digits: number[]): number[] {
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        if (sum === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            digits[i] = sum;
            carry = 0;
            break;
        }
    }

    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
}