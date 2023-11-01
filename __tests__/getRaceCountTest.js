import validateRaceCount from '../src/validation/validationRaceCount';
import errorMessages from '../src/constants/errorMessages';

describe('checkRaceCount', () => {
  test('숫자가 맞는지 확인, 아닐 경우 예외 처리', () => {
    //given
    const raceCount = 'a';

    //when & then
    expect(() => validateRaceCount(raceCount)).toThrow(errorMessages.NOT_NUMBER);
  });

  test('숫자가 0인지 확인, 0이면 에러처리', () => {
    //given
    const raceCount = 0;

    //when & then
    expect(() => validateRaceCount(raceCount)).toThrow(errorMessages.NOT_IN_RANGE_NUMBER);
  });

  test('1 이상의 숫자를 입력했을 경우 정상 작동', () => {
    // given
    const raceCount = 2;

    // when & then
    validateRaceCount(raceCount);
  });
});
