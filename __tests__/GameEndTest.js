import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('게임이 정상종료 되는지를 검증합니다.', () => {
  test('App.play 함수를 실행했을 때, 최종 우승자를 출력하고 정상적으로 게임이 끝납니다.', async () => {
    // given
    const input = ['pobi,crong,rupee', 3];
    mockQuestions(input);
    const logSpy = getLogSpy();
    const expected = '최종 우승자';

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expected));
  });
})
