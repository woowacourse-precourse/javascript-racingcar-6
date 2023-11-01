const validNameConvention = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;
    if (string[i] === ',') {
      count = 0;
      continue;
    }
    if (count > 5) return false;
  }
  return true;
};

const validDuplication = (arr) => {
  return arr.length !== new Set(arr).size;
};

const isNumber = (string) => {
  if (isNaN(string)) return false;
  return true;
};

describe('자동차 입력 이름 테스트', () => {
  test('일반적인 상황 정상적인 처리', () => {
    const input = 'pobi,woni,jun';

    expect(validNameConvention(input)).toBe(true);
  });

  test('다섯글자가 넘는 이름이 하나 이상 존재', () => {
    const input = 'pobiastrak,woni,jun';

    expect(validNameConvention(input)).toBe(false);
  });

  test('차가 하나여도 가능', () => {
    const input = 'abcde';

    expect(validNameConvention(input)).toBe(true);
  });

  test('공백이 포함된 입력, 예외처리', () => {
    const input = '     acd';

    expect(validNameConvention(input)).toBe(false);
  });

  test('중복 이름을 가진 입력', () => {
    const input = ['pobi', 'woni', 'pobi'];

    expect(validDuplication(input)).toBe(true);
  });
});
