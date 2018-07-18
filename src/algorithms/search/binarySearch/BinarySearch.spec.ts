import BinarySearch from './BinarySearch';

describe('Search', () => {

  test('should search a element in array and return index of the element in upper half', () => {

    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const searchElement = 7;
    const expectedIndex = 6;

    expect(new BinarySearch().search(elements, searchElement)).toBe(expectedIndex);
  });

  test('should search a element in array and return index of the element in lower half', () => {

    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const searchElement = 2;
    const expectedIndex = 1;

    expect(new BinarySearch().search(elements, searchElement)).toBe(expectedIndex);
  });

  test('should search a element in array and return -1 when element is not found', () => {

    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const searchElement = 10;
    const expectedIndex = -1;

    expect(new BinarySearch().search(elements, searchElement)).toBe(expectedIndex);
  });

});
