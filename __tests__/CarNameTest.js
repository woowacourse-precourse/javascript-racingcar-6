import CarName from '../src/CarName';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 입력 예외 처리 테스트', () => {
  test('자동차 이름은 다섯글자 이하로 작성한다.', async () => {
    mockQuestions(['to,looonoog']);

    const carName = new CarName();

    await expect(carName.start()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름은 빈공간이 없이 작성한다.', async () => {
    mockQuestions([' ']);

    const carName = new CarName();

    await expect(carName.start()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름은 쉼표(,)를 두번이상 연속으로 작성하면 안된다.', async () => {
    mockQuestions(['Kim,,Lee,Park']);

    const carName = new CarName();

    await expect(carName.start()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름은 쉼표(,)로 끝나거나 쉼표로 시작하면 안된다.', async () => {
    mockQuestions([',Kim,Lee,Park']);

    const carName = new CarName();

    await expect(carName.start()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름은 같은이름이 없이 작성한다.', async () => {
    mockQuestions(['Lee,Lee,Park']);

    const carName = new CarName();

    await expect(carName.start()).rejects.toThrow('[ERROR]');
  });
});
