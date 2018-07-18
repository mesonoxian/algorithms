import MergeSort from './MergeSort';

describe('Merge Sort', () => {

  test('should sort the  given array', () => {

    const unSortedArrays = [5, 4, 3, 2, 1];
    const sortedArrays = [1, 2, 3, 4, 5];
    expect(new MergeSort().sort(unSortedArrays)).toEqual(sortedArrays);
  });

});
