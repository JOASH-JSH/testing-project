const { analyzeArray } = require('./analyzeArray.js');

describe('Test analyze array function', () => {
    test('ANALYZE ARRAY TEST 1', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

    test('ANALYZE ARRAY TEST 2', () => {
        expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toStrictEqual({
            average: -4,
            min: -8,
            max: -1,
            length: 6
        });
    });

    test('ANALYZE ARRAY TEST 3', () => {
        expect(analyzeArray([5, -5, 10, -10])).toStrictEqual({
            average: 0,
            min: -10,
            max: 10,
            length: 4
        });
    });

    test('ANALYZE ARRAY TEST 4', () => {
        expect(analyzeArray([4, 4, 4, 4])).toStrictEqual({
            average: 4,
            min: 4,
            max: 4,
            length: 4
        });
    });

    test('ANALYZE ARRAY TEST 4', () => {
        expect(analyzeArray([7])).toStrictEqual({
            average: 7,
            min: 7,
            max: 7,
            length: 1
        });
    });

    test('ANALYZE EMPTY ARRAY', () => {
        expect(() => analyzeArray([])).toThrow('Array cannot be empty');
    });

    test('ANALYZE EMPTY ARRAY', () => {
        expect(() => analyzeArray({ one: 1, two: 2 })).toThrow('Input must be an array');
    });
});
