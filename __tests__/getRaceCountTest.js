import valitdateRaceCount from '../src/validation/validationRaceCount';

describe('checkRaceCount', () => {
  test('숫자가 맞는지 확인, 아닐 경우 예외 처리', () => {
    //given
    const raceCount = '1';

    //when & then
    expect(() => valitdateRaceCount(raceCount)).toThrowError('[ERROR]');
  });

  test('숫자가 0이 아닌지 확인, 아닐 경우 예외 처리', () => {
    //given
    const raceCount = 0;

    //when & then
    expect(() => valitdateRaceCount(raceCount)).toThrowError('[ERROR]');
  });
});
