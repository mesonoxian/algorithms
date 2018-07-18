import SelectionSort from './SelectionSort';

describe('Selection Sort', () => {

  test('should sort the  given array', () => {

    const unSortedArrays = [5, 4, 3, 2, 1];
    const sortedArrays = [1, 2, 3, 4, 5];
    expect(new SelectionSort().sort(unSortedArrays)).toEqual(sortedArrays);
  });

});
