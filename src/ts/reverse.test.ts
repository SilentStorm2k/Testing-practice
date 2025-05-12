import { reverse } from './reverse';

test('Checking string reversal 1', () => {
    expect(reverse('string')).toBe('gnirts');
});

test('Checking string reversal 2', () => {
    expect(reverse('amazing')).toBe('gnizama');
});
