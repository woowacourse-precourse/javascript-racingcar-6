import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('사용자 입력 테스트', () => {
  test('사용자로부터 자동차 이름과 자동차 경주 횟수를 입력받아 변수에 저장', async () => {
    const userCarInput = 'Alley,Tami,Yuna';
    const userRaceTimesInput = '1';
    
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync
      .mockReturnValueOnce(Promise.resolve(userCarInput))
      .mockReturnValueOnce(Promise.resolve(userRaceTimesInput));
    
    const app = new App();
    await app.play();

    expect(app.cars).toEqual(['Alley', 'Tami', 'Yuna']);
    expect(app.raceTimes).toBe('1');
  });
});