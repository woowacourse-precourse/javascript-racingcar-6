import ERROR_MESSAGE from '../src/constant/errorMessage';
import TrialNum from '../src/model/TrialNum';

describe('시도 횟수 유효성 테스트', () => {
  test('정상 값 입력 시 통과', () => {
    const input = 3;

    expect(() => {
      const trialNum = new TrialNum(input);
      trialNum.validate();
    }).not.toThrow();
  });

  test('숫자가 아닐 경우 에러 반환', () => {
    const input = NaN;

    expect(() => {
      const trialNum = new TrialNum(input);
      trialNum.validate();
    }).toThrow(ERROR_MESSAGE.not_number);
  });

  test('숫자의 크기가 0 이하일 경우 에러 반환', () => {
    const input = 0;

    expect(() => {
      const trialNum = new TrialNum(input);
      trialNum.validate();
    }).toThrow(ERROR_MESSAGE.less_than_one_trial);
  });

  test('숫자에 공백이 포함될 경우 에러 반환', () => {
    const input = '1 2';

    expect(() => {
      const trialNum = new TrialNum(input);
      trialNum.validate();
    }).toThrow(ERROR_MESSAGE.has_space);
  });
});
