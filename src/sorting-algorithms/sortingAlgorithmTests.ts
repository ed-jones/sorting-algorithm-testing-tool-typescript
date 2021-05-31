import SortingAlgorithmTester, { Efficiency, ICompare, IGenerate, TestType } from '../sorting-algorithm-tester';
import SortingAlgorithms from './SortingAlgorithms';

const generateRandomArrayLength = () => Math.floor(Math.random()*512);

// Numbers
const numberSortingAlgorithms = new SortingAlgorithms<number>();
const numberCompare: ICompare<number> = (arg0, arg1) => {
    if (arg0 > arg1) return 1;
    if (arg0 < arg1) return -1;
    return 0;
}
const generateNumber: IGenerate<number> = (arg0) => arg0;

// String
const stringSortingAlgorithms = new SortingAlgorithms<string>();
const stringCompare: ICompare<string> = (arg0, arg1) => numberCompare(parseInt(arg0, 36), parseInt(arg1, 36));
const generateString: IGenerate<string> = (arg0) => arg0.toString(36);

// Tests
console.log("--- Testing Numeric Bubble Sort ---");
const numericBubbleTester = new SortingAlgorithmTester(numberSortingAlgorithms.bubbleSort, numberCompare, generateNumber);
numericBubbleTester.setEfficiency(Efficiency.N_SQUARED)
numericBubbleTester.addTest(TestType.RANDOM, generateRandomArrayLength());
numericBubbleTester.addTest(TestType.SHUFFLED, generateRandomArrayLength());
numericBubbleTester.addTest(TestType.REVERSE_SORTED, generateRandomArrayLength());
numericBubbleTester.setEfficiency();
numericBubbleTester.addTest(TestType.PRESORTED, generateRandomArrayLength());
numericBubbleTester.addTest(TestType.EMPTY, generateRandomArrayLength());
numericBubbleTester.runTests();

console.log("--- Testing Numeric Heap Sort ---");
const numericHeapTester = new SortingAlgorithmTester(numberSortingAlgorithms.heapSort, numberCompare, generateNumber);
numericHeapTester.setEfficiency(Efficiency.N_LOG_N)
numericHeapTester.addTest(TestType.RANDOM, generateRandomArrayLength());
numericHeapTester.addTest(TestType.SHUFFLED, generateRandomArrayLength());
numericHeapTester.addTest(TestType.REVERSE_SORTED, generateRandomArrayLength());
numericHeapTester.addTest(TestType.PRESORTED, generateRandomArrayLength());
numericHeapTester.setEfficiency();
numericHeapTester.addTest(TestType.EMPTY, generateRandomArrayLength());
numericHeapTester.runTests();

console.log("--- Testing Numeric Insertion Sort ---");
const numericInsertionTester = new SortingAlgorithmTester(numberSortingAlgorithms.insertionSort, numberCompare, generateNumber);
numericInsertionTester.setEfficiency(Efficiency.N_LOG_N)
numericInsertionTester.addTest(TestType.RANDOM, generateRandomArrayLength());
numericInsertionTester.addTest(TestType.SHUFFLED, generateRandomArrayLength());
numericInsertionTester.addTest(TestType.REVERSE_SORTED, generateRandomArrayLength());
numericInsertionTester.setEfficiency(Efficiency.N)
numericInsertionTester.addTest(TestType.PRESORTED, generateRandomArrayLength());
numericInsertionTester.addTest(TestType.EMPTY, generateRandomArrayLength());
numericInsertionTester.runTests();

console.log("--- Testing Numeric Quick Sort ---");
const numericQuickTester = new SortingAlgorithmTester(numberSortingAlgorithms.quickSort, numberCompare, generateNumber);
numericQuickTester.setEfficiency(Efficiency.N_LOG_N)
numericQuickTester.addTest(TestType.RANDOM, generateRandomArrayLength());
numericQuickTester.addTest(TestType.SHUFFLED, generateRandomArrayLength());
numericQuickTester.addTest(TestType.REVERSE_SORTED, generateRandomArrayLength());
numericQuickTester.addTest(TestType.PRESORTED, generateRandomArrayLength());
numericQuickTester.setEfficiency(Efficiency.N)
numericQuickTester.addTest(TestType.EMPTY, generateRandomArrayLength());
numericQuickTester.runTests();

console.log("--- Testing Numeric Selection Sort ---");
const numericSelectionTester = new SortingAlgorithmTester(numberSortingAlgorithms.selectionSort, numberCompare, generateNumber);
numericSelectionTester.setEfficiency(Efficiency.N_LOG_N)
numericSelectionTester.addTest(TestType.RANDOM, generateRandomArrayLength());
numericSelectionTester.runTests();

console.log("--- Testing Numeric Shell Sort ---");
const numericShellTester = new SortingAlgorithmTester(numberSortingAlgorithms.shellSort, numberCompare, generateNumber);
numericShellTester.setEfficiency(Efficiency.N_LOG_N)
numericShellTester.addTest(TestType.RANDOM, generateRandomArrayLength());
numericShellTester.runTests();

console.log("--- Testing String Bubble Sort ---");
const stringBubbleTester = new SortingAlgorithmTester(stringSortingAlgorithms.bubbleSort, stringCompare, generateString);
stringBubbleTester.setEfficiency(Efficiency.N_SQUARED)
stringBubbleTester.addTest(TestType.RANDOM, generateRandomArrayLength());
stringBubbleTester.runTests();

console.log("All Tests Passed! ✔️")