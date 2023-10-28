import { repeatFunctionNTimes } from '../src/utils/repeatFunctionNTimes.js';
import { calculateLongestDistance } from './../src/utils/calculateLongestDistance.js';
import { hasDuplicate } from './../src/utils/validateValue.js';

describe('repeatFunctionNTimes', () => {
  it('첫번째 인자로 넣은 숫자 만큼 호출이 되어야 한다.', () => {
    const mockFunction = jest.fn();
    const n = 5;

    repeatFunctionNTimes(n, mockFunction);
    expect(mockFunction).toHaveBeenCalledTimes(n);
  });
});

describe('calculateLongestDistance', () => {
  it('가장 긴 길이를 구할 수 있어야 한다.', () => {
    //given
    const carModels = [
      { carName: 'seorim', position: '---' },
      { carName: 'eunjeong', position: '--' },
      { carName: 'sukjoon', position: '-' },
    ];

    const result = calculateLongestDistance(carModels);
    expect(result).toBe(3);
  });
});

describe('hasDuplicate', () => {
  it('배열에 중복이 있는지 검증이 되어야 한다.', () => {
    //given
    const input1 = [1, 1, 2];
    const input2 = [1, 2, 3];

    const result1 = hasDuplicate(input1);
    expect(result1).toBe(true);

    const result2 = hasDuplicate(input2);
    expect(result2).toBe(false);
  });
});
