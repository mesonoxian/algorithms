class LinearSearch {

  public search(elements: number[], searchElement: number): number {

    for (let index = 0; index < elements.length; ++index) {
      if (elements[index] === searchElement) {
        return index;
      }
    }

    return -1;
  }
}

export default LinearSearch;
