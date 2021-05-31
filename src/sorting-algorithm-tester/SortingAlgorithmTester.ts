import findClosest from "./findClosest";
import generateArray from "./generateArray";

/**
 * Compare function that takes 2 arguments of type T and returns
 * -1 if arg0 < arg1
 * 0 if arg0 = arg1
 * 1 if arg0 > arg1
 */
export type ICompare<T> = (arg0: T, arg1: T) => -1 | 0 | 1;

/**
 * Sorting algorithm that takes an unsorted list of type T and returns a sorted list of type T
 */
export type ISortingAlgorithm<T> = (arg0: T[], compare: ICompare<T>) => T[];

/**
 * A function that returns a mapped value of type T to a numeric input
 *
 * For example: (1) => 'a', (2) => 'b', etc.
 *
 */
export type IGenerate<T> = (arg0: number) => T;

/**
 * Expected efficiency of the sorted algorithm
 */
export enum Efficiency {
  N_LOG_SQUARED = "n log^2(n)",
  N_SQUARED = "n^2",
  N_LOG_N = "n log(n)",
  LOG_N = "log(n)",
  N = "n",
  UNKNOWN = "Unknown",
}

/**
 * Type of test to be run
 */
export enum TestType {
  PRESORTED = "Presorted",
  RANDOM = "Random",
  REVERSE_SORTED = "Reverse Sorted",
  SHUFFLED = "Shuffled",
  EMPTY = "Empty",
}

export default class SortingAlgorithmTester<T> {
  private sortingAlgorithm: ISortingAlgorithm<T>;
  private compare: ICompare<T>;
  private generate: IGenerate<T>;
  private efficiency?: Efficiency;
  private tests: {
    testType: TestType;
    count: number;
    efficiency?: Efficiency;
  }[] = [];

  constructor(
    sortingAlgorithm: ISortingAlgorithm<T>,
    compare: ICompare<T>,
    generate: IGenerate<T>
  ) {
    this.sortingAlgorithm = sortingAlgorithm;
    this.compare = compare;
    this.generate = generate;
  }

  setEfficiency(efficiency?: Efficiency) {
    this.efficiency = efficiency;
  }

  addTest(testType: TestType, count: number) {
    this.tests.push({ testType, count, efficiency: this.efficiency });
  }

  runTests() {
    this.tests.forEach((test) => {
      console.log(`Preparing tests: ${test.testType}, Length=${test.count}`);
      const { efficiency } = test;
      const unsortedList = generateArray(
        test.testType,
        test.count,
        this.generate
      );
      let comparisonCount = 0;

      const sortedList = this.sortingAlgorithm(
        unsortedList,
        (arg0: T, arg1: T) => {
          comparisonCount++;
          return this.compare(arg0, arg1);
        }
      );
      console.log("Test 1: Validating length of list.");
      printResult(sortedList.length === unsortedList.length, () => {
        console.log(`   Found length: ${unsortedList.length}`);
        console.log(`   Expected length: ${sortedList.length}`);
      });

      console.log("Test 2: Validating if list is sorted.");
      printResult(this.checkSortedValidity(sortedList), () => {
        console.log(`   Original list:`);
        console.log(`   ${unsortedList}`);
        console.log(`   Sorted list:`);
        console.log(`   ${sortedList}`);
      });

      if (!efficiency) {
        console.log();
        return;
      }
      console.log("Test 3: Validating efficiency of algorithm.");
      const closestEfficiency = this.getClosestEfficiency(
        comparisonCount,
        sortedList.length
      );
      printResult(efficiency === closestEfficiency, () => {
        console.log(`   Found efficiency: ${closestEfficiency}`);
        console.log(`   Expected efficiency: ${this.efficiency?.toString()}`);
      });
      console.log();

      function printResult(hasPassed: boolean, onError?: () => void) {
        if (hasPassed) {
          console.log("   Passed. ✔️");
        } else {
          onError && onError();
          console.log("   Failed. ❌");
          process.exit(1);
        }
      }
    });
  }

  private checkSortedValidity(sortedList: T[]): boolean {
    for (let i = 0; i < sortedList.length - 1; i++) {
      if (this.compare(sortedList[i], sortedList[i + 1]) === 1) {
        return false;
      }
    }
    return true;
  }

  private getClosestEfficiency(
    comparisonCount: number,
    listLength: number
  ): Efficiency {
    const nSquared = Math.pow(listLength, 2);
    const logn = Math.log(listLength);
    const nlogn = listLength * logn;
    const n = listLength;
    const arr = [n, logn, nlogn, nSquared];

    const closest = findClosest(arr, comparisonCount);
    const closestMap = {
      [n]: Efficiency.N,
      [logn]: Efficiency.LOG_N,
      [nlogn]: Efficiency.N_LOG_N,
      [nSquared]: Efficiency.N_SQUARED,
    };

    return closestMap[closest];
  }
}
