import { calculator } from './calculator';

describe('Calculator test', () => {
    test('calculator object exists', () => {
        expect(typeof calculator).toBe('object');
    });

    test('adding one and two should give three', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('adding five and nine should give fourteen', () => {
        expect(calculator.add(5, 9)).toBe(14);
    });

    test('subtracting 9 from 24 gives 15', () => {
        expect(calculator.subtract(24, 9)).toBe(15);
    });

    test('subtracting 24 from 9 gives -15', () => {
        expect(calculator.subtract(9, 24)).toBe(-15);
    });

    test('multiplying 3 and 8 gives 24', () => {
        expect(calculator.multiply(3, 8)).toBe(24);
    });

    test('multiplying 0 and 8 gives 0', () => {
        expect(calculator.multiply(0, 8)).toBe(0);
    });

    test('multiplying -15 and 5 gives -75', () => {
        expect(calculator.multiply(-15, 5)).toBe(-75);
    });

    test('division of 10 by 5 gives 2', () => {
        expect(calculator.divide(10, 5)).toBeCloseTo(2);
    });

    test('division of 5 by 10 gives 0.5', () => {
        expect(calculator.divide(5, 10)).toBeCloseTo(0.5);
    });

    test('division by 0', () => {
        expect(() => calculator.divide(10, 0)).toThrow();
    });
});
