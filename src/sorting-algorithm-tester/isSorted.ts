import { ICompare } from "./SortingAlgorithmTester";

export default function isSorted<T>(sortedList: T[], compare: ICompare<T>) {
    for (let i = 0; i < sortedList.length - 1; i++) {
        if (compare(sortedList[i], sortedList[i + 1]) === 1) {
          return false;
        }
      }
      return true;
}