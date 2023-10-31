import printCarLocation from '../../src/functions/startRacing/printCarLocation';
import { getLogSpy } from '../../src/utils/testUtils';

describe('printCarLocation 테스트', () => {
  test('형식에 맞게 출력', () => {
    // given
    const currentRoundResult = {
      car1: 0,
      car2: 4,
      car3: 2,
    };
    const outputs = ['car1 :', 'car2 : ----', 'car3 : --'];
    const logSpy = getLogSpy();

    // when
    printCarLocation(currentRoundResult);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
