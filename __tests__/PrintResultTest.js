import printFinalResult from '../src/modules/outputs/printFinalResult';

describe('최종 우승자 출력 테스트', () => {
  test('우승자가 1명일 때 테스트', async () => {
    const logSpy = jest.spyOn(global.console, 'log');

    // given
    const input = ['pobi : -------'];

    // when
    await printFinalResult(input);

    // then
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi');
  });

  test('우승자가 2명 이상일 때 테스트', async () => {
    const logSpy = jest.spyOn(global.console, 'log');

    // given
    const input = ['pobi : -------', 'minji : -------', 'java : -------', 'js : -------'];

    // when
    await printFinalResult(input);

    // then
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi, minji, java, js');
  });
});
