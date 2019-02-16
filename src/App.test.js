test('this function takes a number and converts it to an array', () => {
  let num = 123;
  expect(convertToArray(num)).toEqual([1, 2, 3]);
  expect(convertToArray(num)).not.toEqual(num);
});

test('for every second number, call doubleNumber, and if result is greater than 9, than call subtractNine', () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let startingIndex = array.length - 2;
  for (let i = startingIndex; i >= 0; i -= 2) {
    let result = doubleNumber(array[i]);
    if (result > 9) {
      subtractNine(result);
    }
  }

  expect(subtractNine.mock.calls.length).toEqual(2);
});
