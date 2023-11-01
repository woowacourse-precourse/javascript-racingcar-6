import { validator } from '../src/utils/validaotor.js';

describe('Validator 테스트', () => {
  test.each(['', 'energy'])('자동차 이름의 타당성 검증', (carName) => {
    expect(validator.isValidCarName(carName)).toEqual(false);
  });

  test.each([[['pobi', 'pobi', 'woni']]])('자동차 목록에 대한 중복 입력 타당성 검증', (carList) => {
    console.log(carList);
    expect(validator.isDuplicatedCarName(carList)).toEqual(true);
  });

  test.each([-1, 0, 0.5, NaN, 'string', true])('이동 횟수에 대한 타당성 검증', ({ round }) => {
    expect(validator.isValidRound(round)).toEqual(false);
  });
});
