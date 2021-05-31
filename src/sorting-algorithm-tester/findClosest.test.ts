import findClosest from "./findClosest";

describe('Testing Find Closest Function', () => {
    test('Array of 4 numbers', () => {
        expect(findClosest([4, 6, 11, 16], 1)).toEqual(4);
        expect(findClosest([4, 6, 11, 16], 2)).toEqual(4);
        expect(findClosest([4, 6, 11, 16], 3)).toEqual(4);
        expect(findClosest([4, 6, 11, 16], 4)).toEqual(4);
        expect(findClosest([4, 6, 11, 16], 5)).toEqual(6);
        expect(findClosest([4, 6, 11, 16], 6)).toEqual(6);
        expect(findClosest([4, 6, 11, 16], 7)).toEqual(6);
        expect(findClosest([4, 6, 11, 16], 8)).toEqual(6);
        expect(findClosest([4, 6, 11, 16], 9)).toEqual(11);
        expect(findClosest([4, 6, 11, 16], 10)).toEqual(11);
        expect(findClosest([4, 6, 11, 16], 11)).toEqual(11);
        expect(findClosest([4, 6, 11, 16], 12)).toEqual(11);
        expect(findClosest([4, 6, 11, 16], 13)).toEqual(11);
        expect(findClosest([4, 6, 11, 16], 14)).toEqual(16);
        expect(findClosest([4, 6, 11, 16], 15)).toEqual(16);
        expect(findClosest([4, 6, 11, 16], 16)).toEqual(16);
    });
    test('Array of 3 numbers', () => {
        expect(findClosest([1, 10, 20], 11)).toEqual(10);
    });
    test('Array of 5 numbers', () => {
        expect(findClosest([1, 10, 20, 30, 40], 11)).toEqual(10);
    });
    test('Test negative numbers', () => {
        expect(findClosest([4, 6, 11, 16], -1)).toEqual(4);
        expect(findClosest([-16, -11, -6, -4], 4)).toEqual(-4);
        expect(findClosest([-4, -6, -11, -16], 4)).toEqual(-4);
    });
    
});