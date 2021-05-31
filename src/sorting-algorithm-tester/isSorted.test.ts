import isSorted from "./isSorted";
import { ICompare } from "./SortingAlgorithmTester";

const compareNumbers: ICompare<number> = (a: number, b: number) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}

describe('Test isSorted function', () => {
    test('Test sorted arrays', () => {
        expect(isSorted([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], compareNumbers)).toBeTruthy();
        expect(isSorted([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], compareNumbers)).toBeTruthy();
        expect(isSorted([5, 10, 15, 20, 25, 30], compareNumbers)).toBeTruthy();
        expect(isSorted([5, 6, 100, 101, 1000, 18000], compareNumbers)).toBeTruthy();
        expect(isSorted([-100, -10, -1, 0, 1, 10, 100], compareNumbers)).toBeTruthy();
        expect(isSorted([-100, -99, -98, -97, -96], compareNumbers)).toBeTruthy();
        expect(isSorted([0, 0, 0, 0], compareNumbers)).toBeTruthy();
        expect(isSorted([0, 1, 1, 2, 3, 5, 8, 13], compareNumbers)).toBeTruthy();
        expect(isSorted([], compareNumbers)).toBeTruthy();
    });
    test('Test unsorted arrays', () => {
        expect(isSorted([0, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10], compareNumbers)).toBeFalsy();
        expect(isSorted([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 9], compareNumbers)).toBeFalsy();
        expect(isSorted([1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10], compareNumbers)).toBeFalsy();
        expect(isSorted([-1, -2, -3, -4], compareNumbers)).toBeFalsy();
        expect(isSorted([5, -1], compareNumbers)).toBeFalsy();
        expect(isSorted([5, -6], compareNumbers)).toBeFalsy();
        expect(isSorted([0, 0, 0, -1], compareNumbers)).toBeFalsy();
    });
});