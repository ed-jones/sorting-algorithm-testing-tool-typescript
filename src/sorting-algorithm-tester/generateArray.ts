import { IGenerate, TestType } from "./SortingAlgorithmTester";

export default function generateArray<T>(
  testType: TestType,
  length: number,
  generateValue: IGenerate<T>
) {
  let list: T[] = [];
  switch (testType) {
    case TestType.PRESORTED:
      for (let i = 0; i < length; i++) {
        list.push(generateValue(i));
      }
      break;
    case TestType.REVERSE_SORTED:
      for (let i = length - 1; i >= 0; i--) {
        list.push(generateValue(i));
      }
      break;
    case TestType.SHUFFLED:
      const presorted = generateArray<T>(
        TestType.PRESORTED,
        length,
        generateValue
      );
      list = presorted.sort(() => Math.random() - 0.5);
      break;
    case TestType.RANDOM:
      for (let i = 0; i < length; i++) {
        list.push(generateValue(Math.floor(Math.random() * length)));
      }
      break;
    case TestType.EMPTY:
      break;
  }
  return list;
}
