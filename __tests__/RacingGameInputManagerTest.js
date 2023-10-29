import { Console } from '@woowacourse/mission-utils';
import RacingGameInputManager from '../src/racingcar/lib/classes/RacingGameInputManager';

let inputManager;

// beforeEach: 각 테스트 실행 전 공통적으로 호출되는 함수
beforeEach(() => {
  inputManager = new RacingGameInputManager();
  Console.readLineAsync = jest.fn();
});

describe('자동차 경주 게임', () => {
  const validNameList = ['pobi,woni', 'pobi,woni,jun,zxxng'];
  const invalidNameList = ['pobi,eastjun', 'zxxng', '123,233,233'];

  test.each(validNameList)('유효한 이름 목록', async (input) => {
    Console.readLineAsync.mockResolvedValueOnce(input);
    await expect(inputManager.getRacingCars()).resolves.not.toThrow('[ERROR]');
  });

  test.each(invalidNameList)('유효하지 않은 이름 목록', async (input) => {
    Console.readLineAsync.mockResolvedValueOnce(input);
    await expect(inputManager.getRacingCars()).rejects.toThrow('[ERROR]');
  });

  const validNumberList = ['1', '3'];
  const invalidNumberList = ['0', '-2', '2번', 'two'];

  test.each(validNumberList)('유효한 숫자 목록', async (input) => {
    Console.readLineAsync.mockResolvedValueOnce(input);
    await expect(inputManager.getPlayCount()).resolves.not.toThrow('[ERROR]');
  });

  test.each(invalidNumberList)('유효하지 않은 숫자 목록', async (input) => {
    Console.readLineAsync.mockResolvedValueOnce(input);
    await expect(inputManager.getPlayCount()).rejects.toThrow('[ERROR]');
  });

  const validInput = [
    ['pobi,woni', '5'],
    ['pobi,jun,jena', '3'],
  ];

  test.each(validInput)(
    'getRacingInfo() 함수 테스트',
    async (carNames, playCount) => {
      Console.readLineAsync
        .mockResolvedValueOnce(carNames)
        .mockResolvedValueOnce(playCount);
      const racingInfo = await inputManager.getRacingInfo();
      expect(racingInfo).toMatchObject({
        racingCars: inputManager.racingCars,
        playCount: inputManager.playCount,
      });
    },
  );
});
