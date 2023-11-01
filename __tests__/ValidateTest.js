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
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };
  
  describe('자동차 경주 게임 유효성 검사',() => {
    test('자동차 이름이 5글자를 초과하는 경우', async () => {
        //given
        const inputs = ['ihavemorethanfive', 'mike', 'jane', 'tom']
        mockQuestions(inputs)

        //when
        const app = new App();

        //then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    })

    test('자동차 이름에 공백이 있을 경우', async() => {
        //given
        const inputs = ['m ike','pa ul']
        mockQuestions(inputs)

        //when
        const app = new App();

        //then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    })

    test('반복 횟수에 숫자가 아닌 것이 들어갈 경우', async() => {
        //given
        const inputs = ["mike, paul", "a"];
        mockQuestions(inputs)

        //when
        const app = new App();

        //then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    })
  })