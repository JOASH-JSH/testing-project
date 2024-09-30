const { caesarCipher } = require('./caesarCipher.js');

test('caesar cipher string test 1', () => {
    expect(caesarCipher('xyz', 3)).toMatch(/abc/);
});

test('caesar cipher string test 2', () => {
    expect(caesarCipher('HeLLo', 3)).toMatch(/KhOOr/);
});

test('caesar cipher string test 3', () => {
    expect(caesarCipher('Hello, World!', 3)).toMatch(/Khoor, Zruog!/);
});

test('caesar cipher string test 4', () => {
    expect(caesarCipher('Khoor, Zruog!', -3)).toMatch(/Hello, World!/);
});

// Test case with a large positive shift
test('caesar cipher string test 5', () => {
    expect(caesarCipher('abc', 26)).toMatch(/abc/);
});

// Test case with a large negative shift
test('caesar cipher string test 6', () => {
    expect(caesarCipher('abc', -26)).toMatch(/abc/);
});

test('caesar cipher string test 7', () => {
    expect(caesarCipher('Hello123!', 5)).toMatch(/Mjqqt123!/);
});

test('caesar cipher string test 8', () => {
    expect(caesarCipher('No Shift', 0)).toMatch(/No Shift/);
});

test('caesar cipher string test 9', () => {
    expect(caesarCipher('Defend', -3)).toMatch(/Abcbka/);
});

test('caesar cipher string test 10', () => {
    expect(caesarCipher('Attack AT DAWN!', 4)).toMatch(/Exxego EX HEAR!/);
});

test('caesar cipher string test 11', () => {
    expect(caesarCipher('Mixed-case text @ 123', 2)).toMatch(/Okzgf-ecug vgzv @ 123/);
});

test('caesar cipher string test 12', () => {
    expect(caesarCipher('Edge Case', 52)).toMatch(/Edge Case/);
});

test('caesar cipher string test 13', () => {
    expect(caesarCipher('Edge Case', -52)).toMatch(/Edge Case/);
});

test('caesar cipher string test 14', () => {
    expect(caesarCipher('Edge Case', -78)).toMatch(/Edge Case/);
});
