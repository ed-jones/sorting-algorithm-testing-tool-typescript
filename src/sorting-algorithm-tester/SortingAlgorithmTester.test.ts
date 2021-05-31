import SortingAlgorithmTester, {
  Efficiency,
  ICompare,
  IGenerate,
  ISortingAlgorithm,
  TestType,
} from "./SortingAlgorithmTester";

const numberCompare: ICompare<number> = (arg0, arg1) => {
  if (arg0 > arg1) return 1;
  if (arg0 < arg1) return -1;
  return 0;
};

const generateNumber: IGenerate<number> = (arg0) => arg0;

const bubbleSort: ISortingAlgorithm<number> = (unsorted, compare) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < unsorted.length; i++) {
      if (compare(unsorted[i - 1], unsorted[i]) === 1) {
        done = false;
        [unsorted[i - 1], unsorted[i]] = [unsorted[i], unsorted[i - 1]];
      }
    }
  }
  return unsorted;
};

describe("Sorting Algorithm Tester Tests", () => {
  const testingTool = new SortingAlgorithmTester(
    bubbleSort,
    numberCompare,
    generateNumber
  );

  test("Test bubble sort", () => {
    testingTool.setEfficiency(Efficiency.N_SQUARED);
    testingTool.addTest(TestType.SHUFFLED, 1000);

    console.log = jest.fn();
    testingTool.runTests();
    expect(console.log).toHaveBeenCalledWith(
      "Preparing tests: Shuffled, Length=1000"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Test 1: Validating length of list."
    );
    expect(console.log).toHaveBeenCalledWith("   Passed. ✔️");
  });

  test("Test efficiency reset", () => {
    testingTool.setEfficiency(Efficiency.N);
    testingTool.addTest(TestType.PRESORTED, 1000);

    console.log = jest.fn();
    testingTool.runTests();
    expect(console.log).toHaveBeenCalledWith(
      "Preparing tests: Presorted, Length=1000"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Test 1: Validating length of list."
    );
    expect(console.log).toHaveBeenCalledWith("   Passed. ✔️");
  });
});
