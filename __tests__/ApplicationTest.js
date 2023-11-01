import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
    [[',pobi,java']],
    [['pobi,java,']],
    [['pobi,,java']],
    [['pobi,pobi']]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([
    [['0']],
    [['12a']]
  ])('이동에 대한 예외 처리', async (inputs) => {
    //given
    mockQuestions(inputs);

    //when
    const app = new App();
    
    //then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test("자동차 이동 횟수 업데이트", () => {
    // given
    const app = new App();
    app.carMoveCount = [2, 3, 4];
    const getRandomNumberMock = jest.fn().mockReturnValueOnce(5).mockReturnValueOnce(1).mockReturnValueOnce(8);
  
    // when
    app.getRandomNumber = getRandomNumberMock;
    app.updateCarMoveCount();
  
    // then
    expect(app.carMoveCount).toEqual([3, 3, 5]);
  });

  describe('자동차 경주 승자 확인', () => {
    test('우승자 한명', async () => {
      // given
      const app = new App();
      app.carName = ['car1', 'car2', 'car3'];
      app.carMoveCount = [2, 5, 3];
  
      // when
      const winners = app.findWinners();
  
      // then
      expect(winners).toEqual('car2');
    });
  
    test('우승자 여러명', async () => {
      // given
      const app = new App();
      app.carName = ['car1', 'car2', 'car3'];
      app.carMoveCount = [3, 3, 3];
        
      // when
      const winners = app.findWinners();
  
      // then
      expect(winners).toContain('car1');
      expect(winners).toContain('car2');
      expect(winners).toContain('car3');
    });
  });
});
