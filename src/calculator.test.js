const Calculator = require('./calculator.js');

describe('Calculator class tests', () => {
    const calculator = new Calculator();

    test('addition of 5 + 3 should return 8', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('addition of -5 + -3 should return -8', () => {
        expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('addition of 5 + -3 should return 2', () => {
        expect(calculator.add(5, -3)).toBe(2);
    });

    test('subtraction of 5 - 3 should return 2', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtraction of -5 - (-3) should return -2', () => {
        expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('subtraction of 5 - (-3) should return 8', () => {
        expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('multiplication of 5 * 3 should return 15', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('multiplication of 5 * -3 should return -15', () => {
        expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('multiplication of -5 * -3 should return 15', () => {
        expect(calculator.multiply(-5, -3)).toBe(15);
    });

    test('division of 6 / 3 should return 2', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('division of 6 / -3 should return -2', () => {
        expect(calculator.divide(6, -3)).toBe(-2);
    });

    test('division of -6 / -3 should return 2', () => {
        expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('division of 5 / 0 should throw an error', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });

    test('Invalid data type should throw an error', () => {
        expect(() => calculator.divide(5, '5')).toThrow('Invalid data type');
    });

    test('multiplication of 0 * 5 should return 0', () => {
        expect(calculator.multiply(0, 5)).toBe(0);
    });
});
