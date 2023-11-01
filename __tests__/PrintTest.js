import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/model/Car';
import OutputView from '../src/view/OutputView';

const getLogSpy = () => {
  // ApplicationTest에서 제공하는 함수 - 제공된 코드를 변형하지 않고, 검증을 위해 그대로 사용
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('출력 기능 테스트', () => {
  test('출력 문구 형식 출력 확인 테스트', async () => {
    const output = `실행 결과`;
    const logSpy = getLogSpy();

    OutputView.printMessage();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
  test('레이스 경기 결과 형식 출력 확인 테스트', async () => {
    const logSpy = getLogSpy();
    const names = ['abc', '하하', '호호', '우테코', '🤔', '안녕#', 'gogo'];
    const forwardCountData = [4, 1, 3, 6, 9, 3, 7];
    const output = `abc : ----\n하하 : -\n호호 : ---\n우테코 : ------\n🤔 : ---------\n안녕# : ---\ngogo : -------`;
    const cars = names.map(name => new Car(name));
    forwardCountData.forEach((count, index) => {
      cars[index].moveCount = count;
    });

    OutputView.roundResult(cars);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test('실행 결과 최종 우승자 형식 출력 확인 테스트', async () => {
    const names = ['pobi', 'woni', 'javaji'];
    const output = `최종 우승자 : pobi, woni, javaji`;
    const logSpy = getLogSpy();

    OutputView.winnerResult(names);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
