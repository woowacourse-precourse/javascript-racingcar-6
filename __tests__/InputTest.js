import { getCarName } from '../src/RacingCar.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockReturnValueOnce(
    Promise.resolve(input)
  );
};

describe('자동차 경주 게임', () => {
  test('정상적인 자동차 이름 입력', async () => {
    const input = 'car1,car2,car3';
    mockQuestions(input);

    const carObjects = await getCarName();

    expect(carObjects).toEqual([
      { name: 'car1', position: 0 },
      { name: 'car2', position: 0 },
      { name: 'car3', position: 0 },
    ]);
  });

  test('이름이 공백으로 입력된 경우 예외처리', async () => {
    const input = ' , , ';
    mockQuestions(input);

    await expect(getCarName()).rejects.toThrow('[ERROR]');
  });

  test('이름이 중복 된 경우 예외처리', async () => {
    const input = 'car1,car1,car2';
    mockQuestions(input);

    await expect(getCarName()).rejects.toThrow('[ERROR]');
  });
});
