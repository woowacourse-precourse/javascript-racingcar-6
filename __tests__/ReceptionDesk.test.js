import { Console } from '@woowacourse/mission-utils';
import ReceptionDesk from '../src/ReceptionDesk.js';

describe('이름 입력 처리 테스트', () => {
  test('이름 입력 시, Console.readLineAsync를 사용한다', async () => {
    const inputs = 'pobi,woni,jun';
    const readSpy = jest
      .spyOn(Console, 'readLineAsync')
      .mockResolvedValue(inputs);
    await ReceptionDesk.registerRacingCars();
    expect(readSpy).toHaveBeenCalled();
    readSpy.mockClear();
  });
});
