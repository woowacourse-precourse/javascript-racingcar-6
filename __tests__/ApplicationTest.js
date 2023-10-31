import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  // MissionUtils.Console.readLineAsync를 쓸때

  MissionUtils.Console.readLineAsync = jest.fn(); //가짜함수

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    //차례대로 'pobi,woni'과 '1'를 호출한다.
    const input = inputs.shift(); //배열의 맨앞 제거
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  //MissionUtils.Random.pickNumberInRange를 쓸때  numbers 배열에 포함된 값들을 차례로 반환
  MissionUtils.Random.pickNumberInRange = jest.fn();
  //acc (즉, MissionUtils.Random.pickNumberInRange)에 대한 다음 호출에서 number 값을 반환하도록 설정합니다. 여러 번 호출될 경우 각각의 호출에 대해 다른 number 값을 반환
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};
//MissionUtils.Console, 'print' 메서드가 호출되는 것을 기록하고 추적하는 데 사용
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
// "자동차 경주 게임"에 대한 테스트를 그룹화
describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      //MissionUtils.Console, 'print' 메서드를 쓸때
      //예상한 출력 문자열을 포함하는 방식으로 호출되었는지 확인

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    }
  );
});
