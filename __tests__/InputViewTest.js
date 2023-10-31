import { Console } from '@woowacourse/mission-utils';
import InputView from '../src/views/InputView';

Console.readLineAsync = jest.fn();

describe('InputView 테스트', () => {
  let inputView;
  const mockValidator = {
    validateCarNames: jest.fn(),
    validateRoundsNumber: jest.fn(),
  };

  beforeEach(() => {
    inputView = new InputView(mockValidator);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('차량 이름 입력 테스트', () => {
    it('사용자로부터 차량 이름을 입력받아 배열로 반환한다.', async () => {
      Console.readLineAsync.mockResolvedValue('car1,car2,car3');
      const result = await inputView.readCarNamesInput();
      expect(result).toEqual(['car1', 'car2', 'car3']);
    });

    it('입력받은 차량 이름을 검증 함수로 넘긴다.', async () => {
      Console.readLineAsync.mockResolvedValue('car1,car2,car3');
      await inputView.readCarNamesInput();
      expect(mockValidator.validateCarNames).toHaveBeenCalledWith([
        'car1',
        'car2',
        'car3',
      ]);
    });
  });

  describe('라운드 횟수 입력 테스트', () => {
    it('사용자로부터 라운드 횟수를 입력받아 정수로 반환한다.', async () => {
      Console.readLineAsync.mockResolvedValue('5');
      const result = await inputView.readRoundsNumberInput();
      expect(result).toBe(5);
    });

    it('문자열을 입력받으면 NaN으로 반환한다.', async () => {
      Console.readLineAsync.mockResolvedValue('hello');
      const result = await inputView.readRoundsNumberInput();
      expect(result).toEqual(NaN);
    });

    it('입력받은 라운드 횟수를 검증 함수로 넘긴다.', async () => {
      Console.readLineAsync.mockResolvedValue('5');
      await inputView.readRoundsNumberInput();
      expect(mockValidator.validateRoundsNumber).toHaveBeenCalledWith(5);
    });
  });
});
