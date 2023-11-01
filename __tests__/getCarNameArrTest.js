import { Console } from '@woowacourse/mission-utils';
import App from '../src/App';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('getCarNameArr 메소드 테스트', () => {
  test('입력된 문자열을 쉼표로 구분하여 배열로 반환', async () => {
    const app = new App();
    await app.play();

    mockQuestions('car1,car2,car3');
    const result = await getCarNameArr();
    expect(result).toEqual(['car1', 'car2', 'car3']);
  });

  test('차량 이름이 5자를 초과하면 에러를 던짐', async () => {
    const app = new App();
    await app.play();

    mockQuestions('car123,car2,car3');
    await expect(getCarNameArr()).rejects.toThrow(INPUT_ERROR_MSG);
  });
});
