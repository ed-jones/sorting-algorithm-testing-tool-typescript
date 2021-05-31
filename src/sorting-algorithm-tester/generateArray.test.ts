import generateArray from "./generateArray";
import { TestType } from "./SortingAlgorithmTester";

describe('Test Array Generator', () => {
    test('Test empty array', () => {
        expect(generateArray(TestType.EMPTY, 100, (i) => i)).toStrictEqual([]);
    });
    test('Test presorted array', () => {
        const generatedArray = generateArray(TestType.PRESORTED, 5, (i) => i);
        expect(generatedArray).toStrictEqual([0, 1, 2, 3, 4]);
    });
    test('Test reverse sorted array', () => {
        const generatedArray = generateArray(TestType.REVERSE_SORTED, 5, (i) => i);
        expect(generatedArray).toStrictEqual([4, 3, 2, 1, 0]);
    });
    test('Test shuffled array', () => {
        const sortedArray = [0, 1, 2, 3, 4];
        const generatedArray = generateArray(TestType.SHUFFLED, 5, (i) => i);
        expect(generatedArray).toEqual(expect.arrayContaining(sortedArray));
        expect(generatedArray).not.toContain(5);
        expect(generatedArray).not.toContain(-1);
    });
    test('Test random array', () => {
        const sortedArray = [0, 1, 2, 3, 4];
        const generatedArray = generateArray(TestType.RANDOM, 5, (i) => i);
        expect(generatedArray).not.toEqual(sortedArray);
        expect(generatedArray).not.toContain(5);
        expect(generatedArray).not.toContain(-1);
    });
});
