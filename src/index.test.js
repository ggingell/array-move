var move = require('./');

describe('move', function () {
    var CASE_A;
    var CASE_B;
    var CASE_C;

    beforeEach(function () {
        CASE_A = ['a', 'b'];
        CASE_B = ['a','b','c'];
        CASE_C = ['a','b','c','d','e','f'];
    });

    it('moves', function () {

        expect(move(CASE_A, 0, 0)).toEqual(['a','b']);
        expect(move(CASE_A, 1, 1)).toEqual(['a','b']);

        expect(move(CASE_A, 0, 1)).toEqual(['b','a']);
        expect(move(CASE_A, 1, 0)).toEqual(['b','a']);

        expect(move(CASE_B, 0, 1)).toEqual(['b','a','c']);
        expect(move(CASE_B, 1, 0)).toEqual(['b','a','c']);
        expect(move(CASE_B, 2, 0)).toEqual(['c','a','b']);
        expect(move(CASE_B, 0, 2)).toEqual(['b','c','a']);
        expect(move(CASE_B, 1, 2)).toEqual(['a','c','b']);
        expect(move(CASE_B, 2, 1)).toEqual(['a','c','b']);

        expect(move(CASE_C, 0, 1)).toEqual(['b','a','c','d','e','f']);
        expect(move(CASE_C, 1, 4)).toEqual(['a','c','d','e','b','f']);
        expect(move(CASE_C, 4, 2)).toEqual(['a','b','e','c','d','f']);
        expect(move(CASE_C, 0, 5)).toEqual(['b','c','d','e','f','a']);
        expect(move(CASE_C, 5, 0)).toEqual(['f','a','b','c','d','e']);
    });
});
