class BinarySearch {

  public search(elements: number[], searchElement: number): number {

    let startIndex = 0;
    let stopIndex = elements.length - 1;

    while (startIndex <= stopIndex) {

      const middleIndex = Math.floor((startIndex + stopIndex) / 2);

      if (elements[middleIndex] === searchElement) {
        return middleIndex;
      } else if (elements[middleIndex] > searchElement) {
        stopIndex = middleIndex - 1;
      } else {
        startIndex = middleIndex + 1;
      }
    }

    return -1;

  }
}

export default BinarySearch;
