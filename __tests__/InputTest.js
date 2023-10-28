import { MissionUtils } from '@woowacourse/mission-utils';
import Input from '../src/utils/Input';

const mockInput = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('값 입력 테스트', () => {
  test('입력 문구 출력', () => {
    const logSpy = getLogSpy();
    const input = new Input();
    input.getCarNames().then(() => {
      expect(logSpy).toHaveBeenCalledWith(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
    });
  });

  test('이름 입력', async () => {
    const input = new Input();
    const inputs = ['pobi,woni'];
    mockInput(inputs);
    await expect(input.getCarNames()).resolves.toEqual(['pobi', 'woni']);
  });

  test('5자 초과인 경우에 대한 예외 처리', async () => {
    const input = new Input();
    const inputs = ['pobi,woni,helloworld'];
    mockInput(inputs);
    await expect(input.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('이름이 중복되는 경우에 대한 예외 처리', async () => {
    const input = new Input();
    const inputs = ['pobi,pobi'];
    mockInput(inputs);
    await expect(input.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('이름이 없는 경우에 대한 예외 처리', async () => {
    const input = new Input();
    const inputs = [''];
    mockInput(inputs);
    await expect(input.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('공백 제거', async () => {
    const input = new Input();
    const inputs = ['pobi, woni ,jason , ryan'];
    mockInput(inputs);
    await expect(input.getCarNames()).resolves.toEqual(['pobi', 'woni', 'jason', 'ryan']);
  });

  test('빈 자동차 이름이 있는 경우 예외 처리', async () => {
    const input = new Input();
    const inputs = ['pobi,, ,woni,'];
    mockInput(inputs);
    await expect(input.getCarNames()).rejects.toThrow('[ERROR]');
  });
});
