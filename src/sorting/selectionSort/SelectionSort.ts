class SelectionSort {

  public sort(elements: number[]) {

    for (let outerIndex = 0; outerIndex <= elements.length - 1; outerIndex += 1) {
      let minElementIndex = outerIndex;

      for (let innerIndex = outerIndex + 1; innerIndex <= elements.length - 1; innerIndex += 1) {
        if (elements[minElementIndex] > elements[innerIndex]) {
          minElementIndex = innerIndex;
        }
      }

      if (minElementIndex !== outerIndex) {
        this.swapElements(elements, minElementIndex, outerIndex);
      }
    }

    return elements;
  }

  private swapElements(elements: number[], currentElementIndex: number, outerIndex: number) {

    const tempElementValue = elements[currentElementIndex];
    elements[currentElementIndex] = elements[outerIndex];
    elements[outerIndex] = tempElementValue;

    return elements;
  }
}

export default SelectionSort;
