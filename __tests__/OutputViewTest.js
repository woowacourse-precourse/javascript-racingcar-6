import { Console } from '@woowacourse/mission-utils';
import App from '../src/App';
import { OUTPUT_MESSAGE } from '../src/constants/message';

const mockMultipleConsole = (input1, input2) => {
  Console.readLineAsync = jest.fn()
    .mockImplementationOnce(()=> input1)
    .mockImplementationOnce(()=> input2);
}

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 콘솔 테스트', () => {
  test('실행 결과가 출력되는지 테스트', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '3')
    const logspy = getLogSpy();
    await app.play();
    expect(logspy).toHaveBeenCalledWith(OUTPUT_MESSAGE.START);
  })

  test('플레이어 별 결과 값 출력되는지 테스트', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '3')
    const logspy = getLogSpy();
    await app.play();
    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT_MESSAGE.RESULT));
  })

  test('최종 우승자를 출력하는지 테스트', async () => {
    const app = new App();
    mockMultipleConsole('phobi,daeun', '3')
    const logspy = getLogSpy();
    await app.play();
    expect(logspy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT_MESSAGE.WINNER));
  })
})
