import generateArray from "./generateArray";
import { TestType } from "./SortingAlgorithmTester";

describe('Test Array Generator', () => {
    test('Test empty array', () => {
        expect(generateArray(TestType.EMPTY, 100, (i) => i)).toStrictEqual([]);
    });
    test('Test presorted array', () => {
        expect(generateArray(TestType.PRESORTED, 5, (i) => i)).toStrictEqual([0, 1, 2, 3, 4]);
    });
    test('Test reverse sorted array', () => {
        expect(generateArray(TestType.REVERSE_SORTED, 5, (i) => i)).toStrictEqual([4, 3, 2, 1, 0]);
    });
    test('Test shuffled array', () => {
        const originalArray = [0, 1, 2, 3, 4];
        expect(generateArray(TestType.SHUFFLED, 5, (i) => i)).toEqual(expect.arrayContaining(originalArray));
    });
    test('Test random array', () => {
        const originalArray = [0, 1, 2, 3, 4];
        expect(generateArray(TestType.RANDOM, 5, (i) => i)).not.toEqual(expect.arrayContaining(originalArray));
    });
})
