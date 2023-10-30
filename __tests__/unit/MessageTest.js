import { Console } from '@woowacourse/mission-utils';
import Message from '../../src/Message';
import RaceRound from '../../src/RaceRound';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandom = (inputs) => {
  RaceRound.createRandomNum = jest.fn();
  RaceRound.createRandomNum.mockImplementation(() => {
    const input = inputs.shift();
    return input;
  });
};

describe('특정 상황에서 출력되어야 하는 문자에 대한 테스트', () => {
  test('차가 전진할 때마다 "-" 문자가 출력 되는가?', () => {
    const names = ['pobi', 'nori'];
    const raceRound = new RaceRound(names);
    const logSpy = getLogSpy();

    Message.forMovingForward;
    expect(logSpy).toContain('-');
  });

  test('게임 종료 시 최종 우승자를 출력하는가? (우승자가 1명일 경우)', () => {
    Message.forGameResult;
  });

  test('게임 종료 시 최종 우승자를 출력하는가? (우승자가 여러명일 경우)', () => {
    Message.forGameResult;
  });
});
