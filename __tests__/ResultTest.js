import { Console } from '@woowacourse/mission-utils';
import View from '../src/view/View';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('결과 출력 테스트', () => {
  const logSpy = getLogSpy();
  const view = new View();

  test('자동차 distance 결과 테스트', async () => {
    const example = [
      { name: '우테코', distance: 8 },
      { name: '우테코2', distance: 5 },
    ];
    const expectedAnswer = ['우테코 : --------', '우테코2 : -----'];

    example.forEach((output, index) => {
      view.printCarResult(output.name, output.distance);
      expect(logSpy).toHaveBeenCalledWith(expectedAnswer[index]);
    });
  });

  test('우승자 출력 테스트', () => {
    const winnerList = ['합', '격', '기', '원'];
    view.printWinners(winnerList);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('합, 격, 기, 원'));
  });
});
