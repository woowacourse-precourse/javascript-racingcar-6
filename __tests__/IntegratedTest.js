import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

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

describe('게임 실행에 대한 통합 테스트입니다.', () => {
  test('2번 경기가 실행되며 포비가 0칸, 루피가 1칸, 크롱이 1칸 움직이면 최종 우승자로 루피와 크롱이 선정됩니다.', async() => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;

    const inputs = ['pobi,rupee,crong', 2];
    const randoms = [STOP, MOVING_FORWARD, MOVING_FORWARD, STOP, STOP, STOP];
    const answer = '최종 우승자 : rupee, crong';

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenLastCalledWith(answer);
  });

  test('2번 경기가 실행되며 포비가 0칸, 루피가 0칸, 크롱이 0칸 움직이면 공동우승 처리됩니다.', async() => {
    // given
    const STOP = 3;

    const inputs = ['pobi,rupee,crong', 2];
    const randoms = [STOP, STOP, STOP, STOP, STOP, STOP];
    const answer = '최종 우승자 : pobi, rupee, crong';

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenLastCalledWith(answer);
  });

  test('2번 경기가 실행되며 포비가 1칸, 루피가 0칸, 크롱이 0칸 움직이면 최종 우승자로 포비가 선정됩니다', async() => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;

    const inputs = ['pobi,rupee,crong', 2];
    const randoms = [MOVING_FORWARD, STOP, STOP, STOP, STOP, STOP];
    const answer = '최종 우승자 : pobi';

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenLastCalledWith(answer);
  });
});
