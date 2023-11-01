import { Console } from '@woowacourse/mission-utils';
import App from '../src/App';
import { INPUT_MESSAGE } from '../src/constants/message';
import { ERROR_MESSAGE } from '../src/constants/message';

const mockConsoleFn = (input) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(()=> input);
}

const mockMultipleConsole = (input1, input2) => {
  Console.readLineAsync = jest.fn()
    .mockImplementationOnce(()=> input1)
    .mockImplementationOnce(()=> input2);
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "readLineAsync");
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 입력 문구 출력 테스트', () => {
  test('자동차 이름을 입력하세요. 문구를 출력하는지 테스트', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '3');
    const logspy = getLogSpy();
    await app.play();
    expect(logspy).toHaveBeenCalledWith(INPUT_MESSAGE.PLAYER_CARS);
  })


  test('시도할 횟수를 입력받는 문구를 출력하는지 테스트', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '3');
    const logspy = getLogSpy();
    await app.play();
    expect(logspy).toHaveBeenCalledWith(INPUT_MESSAGE.MOVE_COUNTS);
  })
})

describe('자동차 이름 입력 예외 테스트', () => {
  test('공백은 입력될 수 없습니다.', async () => {
    const app = new App();
    mockConsoleFn('daeun, james');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.BLANK);
  })

  test('자동차는 소문자 영어만 입력가능합니다.', async () => {
    const app = new App();
    mockConsoleFn('Daeun,James');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.LOWERCASE);
  })

  test('5글자 이하의 영어만 입력가능합니다.', async () => {
    const app = new App();
    mockConsoleFn('android,ios');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.LENFIVE);
  })

  test('차 이름은 중복될 수 없습니다.', async () => {
    const app = new App();
    mockConsoleFn('daeun,daeun');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.UNIQUE);
  })
})

describe('시도할 횟수 입력 예외 테스트', () => {
  test('문자는 입력할 수 없습니다.', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', 'ten-times');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.NUMBER);
  })

  test('문자는 입력할 수 없습니다.', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', 'ten-times');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.NUMBER);
  })

  test('정수만 입력할 수 있습니다.', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '9.5');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.INT);
  })

  test('음수는 입력할 수 없습니다.', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '-13');
    await expect(()=> app.play()).rejects.toThrow(ERROR_MESSAGE.NEGATIVE);
  })
})
