class MergeSort {

  public sort(elements: number[]): number[] {

    if (elements.length <= 1) {
      return elements;
    }

    const middleIndex = Math.floor(elements.length / 2);

    const lowerHalf = elements.slice(0, middleIndex);
    const upperHalf = elements.slice(middleIndex, elements.length);

    const sortedLowerHalf = this.sort(lowerHalf);
    const sortedUpperHalf = this.sort(upperHalf);

    return this.mergeSortedArrays(sortedLowerHalf, sortedUpperHalf);
  }

  private mergeSortedArrays(sortedLowerHalf: number[], sortedUpperHalf: number[]) {

    let resultSorted = [];
    let sortedLowerHalfIndex = 0;
    let sortedUpperHalfIndex = 0;

    while (sortedLowerHalfIndex < sortedLowerHalf.length && sortedUpperHalfIndex < sortedUpperHalf.length) {

      if (sortedLowerHalf[sortedLowerHalfIndex] < sortedUpperHalf[sortedLowerHalfIndex]) {
        resultSorted.push(sortedLowerHalf[sortedLowerHalfIndex]);
        sortedLowerHalfIndex++;
      } else {
        resultSorted.push(sortedUpperHalf[sortedUpperHalfIndex]);
        sortedUpperHalfIndex++;
      }
    }

    if (sortedLowerHalfIndex < sortedLowerHalf.length) {
      resultSorted = resultSorted.concat(sortedLowerHalf);
    }

    if (sortedUpperHalfIndex < sortedUpperHalf.length) {
      resultSorted = resultSorted.concat(sortedUpperHalf);
    }

    return resultSorted;
  }
}

export default MergeSort;
