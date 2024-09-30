const { capitalize, reverseString } = require('./string.js');

describe('Test capitalize string function', () => {
    test('CAPITALIZE STRING TEST 1', () => {
        expect(capitalize('ang')).toMatch(/Ang/);
    });

    test('CAPITALIZE STRING TEST 2', () => {
        expect(capitalize('oka hagasinw')).toMatch(/Oka hagasinw/);
    });

    test('CAPITALIZE STRING TEST 3', () => {
        expect(capitalize('___angsw__bradar')).toMatch(/___Angsw__bradar/);
    });

    test('CAPITALIZE STRING TEST 4', () => {
        expect(capitalize('')).toMatch(/^$/);
    });

    test('CAPITALIZE STRING TEST 5', () => {
        expect(capitalize('___12345___')).toMatch(/___12345___/);
    });

    test('CAPITALIZE STRING TEST 6', () => {
        expect(capitalize('12abcd')).toMatch(/12Abcd/);
    });

    test('CAPITALIZE STRING TEST 7', () => {
        expect(capitalize(1)).toBeNull();
    });

    test('CAPITALIZE STRING TEST 8', () => {
        expect(capitalize('   ang')).toMatch(/   Ang/);
    });

    test('CAPITALIZE STRING TEST 9', () => {
        expect(capitalize('a')).toMatch(/A/);
    });

    test('CAPITALIZE STRING TEST 10', () => {
        expect(capitalize('@ng$man')).toMatch(/@Ng\$man/);
    });

    test('CAPITALIZE STRING TEST 11', () => {
        expect(capitalize(null)).toBeNull();
    });

    test('CAPITALIZE STRING TEST 12', () => {
        expect(capitalize(undefined)).toBeNull();
    });

    test('CAPITALIZE STRING TEST 13', () => {
        expect(capitalize('ñami')).toMatch(/Ñami/);
    });

    test('CAPITALIZE STRING TEST 14', () => {
        expect(capitalize('aNG')).toMatch(/ANG/);
    });
});

describe('Test reverse string function', () => {
    test('REVERSE STRING TEST 1', () => {
        expect(reverseString('ang')).toMatch(/gna/);
    });

    test('REVERSE STRING TEST 2', () => {
        expect(reverseString('oka')).toMatch(/ako/);
    });

    test('REVERSE STRING TEST 3', () => {
        expect(reverseString('12345')).toMatch(/54321/);
    });

    test('REVERSE STRING TEST 4', () => {
        expect(reverseString(123)).toBeNull();
    });

    test('REVERSE STRING TEST 5', () => {
        expect(reverseString('')).toMatch(/^$/);
    });

    test('REVERSE STRING TEST 6', () => {
        expect(reverseString('1')).toMatch(/1/);
    });

    test('REVERSE STRING TEST 7', () => {
        expect(reverseString('ang hagasinw')).toMatch(/wnisagah gna/);
    });

    test('REVERSE STRING TEST 8', () => {
        expect(reverseString('madam')).toMatch(/madam/);
    });

    test('REVERSE STRING TEST 9', () => {
        expect(reverseString('a')).toMatch(/a/);
    });

    test('REVERSE STRING TEST 10', () => {
        expect(reverseString(null)).toBeNull();
    });

    test('REVERSE STRING TEST 11', () => {
        expect(reverseString(undefined)).toBeNull();
    });

    test('REVERSE STRING TEST 12', () => {
        expect(reverseString('@ng$man')).toMatch(/nam\$gn@/);
    });

    test('REVERSE STRING TEST 13', () => {
        expect(reverseString('ñandú')).toMatch(/údnañ/);
    });

    test('REVERSE STRING TEST 14', () => {
        expect(reverseString('abc123')).toMatch(/321cba/);
    });
});
