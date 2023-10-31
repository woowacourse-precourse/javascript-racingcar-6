import { Console } from '@woowacourse/mission-utils';
import { outputCurrentProgress, outputFinalProgress } from '../src/output';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('실행 결과 출력', () => {
  test('최종 결과: 단일 우승', () => {
    const logSpy = getLogSpy();

    const results = [
      { name: 'adam', distanceFromStart: 3 },
      { name: 'becky', distanceFromStart: 4 },
    ];

    const output = '최종 우승자 : becky';

    outputFinalProgress(results);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test('최종 결과: 공동 우승', () => {
    const logSpy = getLogSpy();

    const results = [
      { name: 'adam', distanceFromStart: 4 },
      { name: 'becky', distanceFromStart: 3 },
      { name: 'craig', distanceFromStart: 4 },
    ];

    const output = '최종 우승자 : adam, craig';

    outputFinalProgress(results);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test('시도 당 결과', () => {
    const logSpy = getLogSpy();

    const results = [
      { name: 'adam', distanceFromStart: 3 },
      { name: 'becky', distanceFromStart: 4 },
    ];

    const outputs = ['adam : ---', 'becky : ----'];

    outputCurrentProgress(results);

    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
