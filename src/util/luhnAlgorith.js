function convertToArray(num) {
  return ('' + num).split('').map(Number);
}

function keyOperation(num) {
  let result;
  let startingNum = num * 2;
  result = startingNum > 9 ? startingNum - 9 : startingNum;
  return result;
}

function determineIssuerIdentification(num) {
  let digits = convertToArray(num);
  let iin = digits.slice(0, 6);
  let firstTwo = Number(iin.slice(0, 2).join(''));
  let firstFour = Number(iin.slice(0, 4).join(''));

  if (iin[0] === 4) {
    return 'Visa';
  } else if (firstTwo === 34 || firstTwo === 37) {
    return 'American Express';
  } else if (
    firstTwo === 51 ||
    firstTwo === 52 ||
    firstTwo === 53 ||
    firstTwo === 54 ||
    firstTwo === 55
  ) {
    return 'MasterCard';
  } else if (firstFour === 6011 || firstTwo === 65) {
    return 'Discover Card';
  }
}

export function luhnAlgorithm(num) {
  let result = {};
  let sum;
  let digits = convertToArray(num);
  let updatedArray = digits.slice(0);
  let secondToLastDigit = digits.length - 2;

  for (let i = secondToLastDigit; i >= 0; i -= 2) {
    updatedArray[i] = keyOperation(digits[i]);
  }

  sum = updatedArray.reduce((sum, item) => sum + item, 0);

  result.valid = sum % 10 === 0 ? true : false;
  result.type = determineIssuerIdentification(num);
  result.num = num;

  return result;
}
