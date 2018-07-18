import LinearSearch from './LinearSearch';

describe('Search', () => {

  test('should search a element in array and return index of the element', () => {

    const elements = [1, 2, 3, 4];
    const searchElement = 3;
    const expectedIndex = 2;

    expect(new LinearSearch().search(elements, searchElement)).toBe(expectedIndex);
  });

  test('should search a element in array and return -1 when element is not found', () => {

    const elements = [1, 2, 3, 4];
    const searchElement = 9;
    const expectedIndex = -1;

    expect(new LinearSearch().search(elements, searchElement)).toBe(expectedIndex);
  });

});
