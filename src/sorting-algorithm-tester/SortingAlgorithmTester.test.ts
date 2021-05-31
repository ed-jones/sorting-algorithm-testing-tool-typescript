import SortingAlgorithmTester from "./SortingAlgorithmTester";

describe('Sorting Algorithm Tester Tests', () => {
    test('Mock input', () => {
        const mockSortingAlgorithm = jest.fn();
        const mockCompare = jest.fn();
        const mockGenerate = jest.fn();
        const testingTool = new SortingAlgorithmTester(mockSortingAlgorithm, mockCompare, mockGenerate);
        testingTool.runTests();
    })
})
