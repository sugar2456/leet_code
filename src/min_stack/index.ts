/**
 * 最小スタック操作クラス
 * 
 * [処理の流れ]  
 * スタックを二つ持つ  
 * 一つは普通に値を持つスタック  
 * もう一つは最小の値を持つためだけのスタック  
 * pushする際に値をスタック、最小値のスタックは その時の最小の値をスタックする  
 * popは普通のスタックと最小値のスタックの一番上を取り除く  
 * topは一番上のスタックを取得する  
 * getminは最小スタックから一番上の値を取得する
 */
export default class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const popped = this.stack.pop();
        if (popped === this.getMin()) {
            this.minStack.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}