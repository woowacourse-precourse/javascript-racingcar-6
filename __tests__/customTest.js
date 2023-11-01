import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
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

describe('프로그램 동작 테스트', () => {
    test('pobi, woni, jiny 세 개의 자동차 이름을 입력받는다.', async() => {
        // given
        const input = 'pobi,woni,jiny';
        mockQuestions([input]);
        const result = ['pobi', 'woni', 'jiny'];
        
        // when
        const app = new App();

        // then
        expect(await app.user.inputCarNames(input)).toEqual(result);
    });
});

describe('예외 처리 테스트', () => {
    test('이름이 공백일 경우 예외처리', async() => {
        // given
        const input = ' , , ';
        mockQuestions([input]);

        const app = new App();
        
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
});