import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import CarRacingGame from '../src/CarRacingGame';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 게임', () => {
  test('입력', async () => {
    const inputs = ['pobi,woni'];
    mockQuestions(inputs);

    // given
    const game = new CarRacingGame();
    const carNames = await game.getCarNames();
    expect(carNames).toEqual('pobi,woni');
  });

  test('문자 길이 5이상 혹은 0', async () => {
    const inputs = ['pobi,woni,,'];
    mockQuestions(inputs);

    // given
    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test('배열에 저장되어 있는 값 확인', async () => {
    const inputs = 'pobi,woni';
    const expectedNames = inputs.split(',').map(name => name.trim());
    mockQuestions([inputs]);

    // given
    const game = new CarRacingGame();
    await game.gameStart();
    const array = [...game.getCarNameArray()];

    array.forEach((element, index) => {
      expect(element.getName()).toEqual(expectedNames[index]);
    });
    
  });
});
