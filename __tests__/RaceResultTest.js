import { Console } from '@woowacourse/mission-utils';
import RaceResult from '../src/RaceResult';
// import { RESULT_STATUS } from '../src/Constant';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('레이싱 경주 출력', () => {
  test('각 차수별 실행 결과 출력', () => {
    const racingCar = [{ carName: 'pobi', forward: 2 }, { carName: 'woni', forward: 3 }];
    const logSpy = getLogSpy();
    
    RaceResult.progress(racingCar);

    expect(logSpy).toHaveBeenCalledWith('pobi : --');
    expect(logSpy).toHaveBeenCalledWith('woni : ---');
  });
});
