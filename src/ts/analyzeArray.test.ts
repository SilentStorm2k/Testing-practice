import { analyzeArray } from './analyzeArray';

test('checking for 4 return objects', () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4,
    });
});

test('Happy path', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('checking for correct min value', () => {
    expect(analyzeArray([-21, -1002, 2, 3, 4]).min).toEqual(-1002);
});

test('checking for correct min value', () => {
    expect(analyzeArray([-21, -1002, 2, 231, 4]).max).toEqual(231);
});

test('length tester', () => {
    expect(analyzeArray([-21, -1002, 2, 231, 4]).length).toEqual(5);
});

test('avg tester', () => {
    expect(analyzeArray([-21, -1002, 2, 231, 4]).average).toBeCloseTo(-157.2);
});
