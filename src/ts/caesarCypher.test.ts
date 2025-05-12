import { caesarCypher } from './caesarCypher';

test('Caesar cypher happy path 1', () => {
    expect(caesarCypher('abc', 3)).toBe('def');
});

test('Caesar cypher happy path 2', () => {
    expect(caesarCypher('xyz', 3)).toBe('abc');
});

test('checking for capital letter preservation', () => {
    expect(caesarCypher('HeLLo', 3)).toBe('KhOOr');
});

test('punctuations and spaces preservation', () => {
    expect(caesarCypher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
