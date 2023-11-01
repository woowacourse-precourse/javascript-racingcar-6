import { MissionUtils } from '@woowacourse/mission-utils';
import RaceOrganizer from '../src/view/RaceOrganizer';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차의 움직임을 출력하는 테스트', () => {
  test('자동차가 앞으로 전진하는지 출력하는 테스트', () => {
    const message = 'bmw : -----';
    const name = 'bmw';
    const lap = '-----';
    const logSpy = getLogSpy();

    // 실행 부분
    RaceOrganizer.talkToCarMovingForward(name, lap);

    expect(logSpy).toBeCalledWith(message);
  });

  test('자동차가 출발하지 않은 상태를 출력하는 테스트', () => {
    const message = 'bmw :';
    const name = 'bmw';
    const lap = '';
    const logSpy = getLogSpy();

    // 실행 부분
    RaceOrganizer.talkToCarMovingForward(name, lap);

    expect(logSpy).toBeCalledWith(message);
  });
});

describe('우승자가 누구인지 출력하는 테스트', () => {
  test('공동 우승자가 출력되는지 체크', () => {
    const participant = new Map([
      ['bmw', '---'],
      ['benz', '--'],
      ['audi', '---'],
    ]);
    const message = '최종 우승자 : bmw, audi';
    const logSpy = getLogSpy();

    // 실행 부분
    RaceOrganizer.talkToWinner(participant);

    expect(logSpy).toBeCalledWith(message);
  });

  test('한 명의 우승자만 출력되는지 체크', () => {
    const participant = new Map([
      ['bmw', '----'],
      ['benz', '--'],
      ['audi', '---'],
    ]);
    const message = '최종 우승자 : bmw';
    const logSpy = getLogSpy();

    // 실행 부분
    RaceOrganizer.talkToWinner(participant);

    expect(logSpy).toBeCalledWith(message);
  });
});

describe('우승 후보 테스트', () => {
  test('최종 우승자 명단을 반환', () => {
    const participant = new Map([
      ['bmw', '----'],
      ['benz', '--'],
      ['audi', '---'],
    ]);
    const winner = ['bmw'];

    // 실행 부분
    const result = RaceOrganizer.getCandidates(participant);

    expect(result).toStrictEqual(winner);
  });

  test('공동 우승자 명단을 반환', () => {
    const participant = new Map([
      ['bmw', '----'],
      ['benz', '----'],
      ['audi', '----'],
    ]);
    const winner = ['bmw', 'benz', 'audi'];

    // 실행 부분
    const result = RaceOrganizer.getCandidates(participant);

    expect(result).toStrictEqual(winner);
  });
});
