import App from '../src/App.js';
import { Console, Random } from '@woowacourse/mission-utils';

describe('Racing 게임 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('userInputNumberOfMoves 메서드 - 올바른 입력 테스트', async () => {
    const mockReadLineAsync = jest.spyOn(Console, 'readLineAsync');
    mockReadLineAsync.mockResolvedValue('3');

    const numberOfMoves = await app.userInputNumberOfMoves();

    expect(numberOfMoves).toBe(3);
  });

  test('userInputNumberOfMoves 메서드 - 잘못된 입력 테스트', async () => {
    const mockReadLineAsync = jest.spyOn(Console, 'readLineAsync');
    mockReadLineAsync.mockResolvedValue('가나다');

    await expect(app.userInputNumberOfMoves()).rejects.toThrow(
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );
  });

  test('resultByRandomNumber 매서드 테스트', async () => {
    const mockPickNumberInRange = jest.spyOn(Random, 'pickNumberInRange');
    mockPickNumberInRange.mockReturnValueOnce(6).mockReturnValueOnce(1);

    app.carNames = ['yj', 'bibi'];

    const result = app.resultByRandomNumber();

    expect(result).toEqual({
      yj: '-',
      bibi: '',
    });
  });

  test('calculateCumulativeResult 메서드 테스트', () => {
    const result = { yj: '-', bibi: '', hihi: '-' };
    const roundStatus = { yj: '', bibi: '-', hihi: '-' };

    app.calculateCumulativeResult(result, roundStatus);

    expect(roundStatus).toEqual({
      yj: '-',
      bibi: '-',
      hihi: '--',
    });
  });

  test('printProgress 메서드 테스트', () => {
    const result = {
      yj: '-',
      bibi: '',
      hihi: '-',
    };

    const consolePrintSpy = jest.spyOn(Console, 'print');

    app.printProgress(result);

    expect(consolePrintSpy).toHaveBeenCalledTimes(3);
    expect(consolePrintSpy).toHaveBeenNthCalledWith(1, 'yj : -');
    expect(consolePrintSpy).toHaveBeenNthCalledWith(2, 'bibi : ');
    expect(consolePrintSpy).toHaveBeenNthCalledWith(3, 'hihi : -');
  });

  test('printWinner 메서드 테스트', () => {
    const winners = ['yj', 'bibi', 'hihi'];
    const consolePrintSpy = jest.spyOn(Console, 'print');

    app.printWinner(winners);

    expect(consolePrintSpy).toHaveBeenCalledTimes(1);
    expect(consolePrintSpy).toHaveBeenCalledWith(
      '최종 우승자 : yj, bibi, hihi',
    );
  });
});
