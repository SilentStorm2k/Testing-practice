export const calculator = (function () {
    const add = (a: number, b: number) => a + b;
    const subtract = (a: number, b: number) => a - b;
    const multiply = (a: number, b: number) => a * b;
    const divide = (a: number, b: number) => {
        if (b == 0) throw new Error('Cannot divide by 0');
        return a / b;
    };
    return { add, subtract, multiply, divide };
})();
