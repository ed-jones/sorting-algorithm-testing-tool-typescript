import { ISortingAlgorithm } from '../sorting-algorithm-tester/SortingAlgorithmTester';

export default class SortingAlgorithms<T> {
    bubbleSort: ISortingAlgorithm<T> = (unsorted, compare) => {
        let done = false;
        while (!done) {
            done = true;
            for (let i = 1; i<unsorted.length; i++) {
                if (compare(unsorted[i-1], unsorted[i]) === 1) {
                    done = false;
                    [unsorted[i-1], unsorted[i]] = [unsorted[i], unsorted[i-1]]
                }
            }
        }
        return unsorted;
    }

    heapSort: ISortingAlgorithm<T> = (unsorted, compare) => {
        heapify(unsorted)
        let end = unsorted.length - 1
        while (end > 0) {
            [unsorted[end], unsorted[0]] = [unsorted[0], unsorted[end]]
            end--
            siftDown(unsorted, 0, end)
        }
        return unsorted;
         
        function heapify(unsorted: T[]) {
            let start = Math.floor(unsorted.length/2) - 1
         
            while (start >= 0) {
                siftDown(unsorted, start, unsorted.length - 1)
                start--
            }
        }
         
        function siftDown(unsorted: T[], startPos: number, endPos: number) {
            let rootPos = startPos
         
            while (rootPos * 2 + 1 <= endPos) {
                let childPos = rootPos * 2 + 1
                if (childPos + 1 <= endPos && compare(unsorted[childPos], unsorted[childPos + 1]) === -1) {
                    childPos++
                }
                if (compare(unsorted[rootPos], unsorted[childPos]) === -1) {
                    [unsorted[rootPos], unsorted[childPos]] = [unsorted[childPos], unsorted[rootPos]]
                    rootPos = childPos
                } else {
                    return
                }
            }
        }
    }
    
    insertionSort: ISortingAlgorithm<T> = (unsorted, compare) => {
        let n = unsorted.length;
        for (let i = 1; i < n; i++) {
            let current = unsorted[i];
            let j = i-1; 
            while (compare(current, unsorted[j]) === -1 && (j > -1)) {
                unsorted[j+1] = unsorted[j];
                j--;
            }
            unsorted[j+1] = current;
        }
        return unsorted;
    }

    quickSort: ISortingAlgorithm<T> = (unsorted, compare) => {
        if (unsorted.length) {
            let h = unsorted[0],
                t = unsorted.slice(1),
    
                lessMore = partition((x: T) => compare(x, h) < 1, t),
                less = lessMore[0],
                more = lessMore[1];
    
            return ([] as T[]).concat.apply(
                ([] as T[]), [this.quickSort(less, compare), h, this.quickSort(more, compare)]
            );
    
        } else return [];

        function partition(p: (x: T) => boolean, xs: T[]) {
            return xs.reduce(function (a, x) {
                return (
                    a[p(x) ? 0 : 1].push(x),
                    a
                );
            }, [([] as T[]), ([] as T[])]);
        }
    }

    selectionSort: ISortingAlgorithm<T> = (unsorted, compare) => {
        let len = unsorted.length;
        for(let i = 0; i < len; i++) {
          let minAt = i;
          for(let j = i + 1; j < len; j++) {
            if(compare(unsorted[j], unsorted[minAt]) === -1)
              minAt = j;
          }
       
          if(minAt != i) {
            let temp = unsorted[i];
            unsorted[i] = unsorted[minAt];
            unsorted[minAt] = temp;
          }
        }
        return unsorted;
    }

    shellSort: ISortingAlgorithm<T> = (unsorted, compare) => {
        for (var h = unsorted.length; h > 0; h = Math.floor(h / 2)) {
            for (var i = h; i < unsorted.length; i++) {
                var k = unsorted[i];
                for (var j = i; j >= h && compare(k, unsorted[j - h]) === -1; j -= h)
                    unsorted[j] = unsorted[j - h];
                unsorted[j] = k;
            }
        }
        return unsorted;
    }

}
