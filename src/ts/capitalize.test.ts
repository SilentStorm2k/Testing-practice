import { capitalize } from './capitalize';

test('Capitalize path 1', () => {
    expect(capitalize('string')).toBe('String');
});

test('Capitalize path 2', () => {
    expect(capitalize('test')).toBe('Test');
});
