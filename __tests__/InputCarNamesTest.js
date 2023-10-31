import { Console } from '@woowacourse/mission-utils';
import RacingCar from '../src/domain/RacingCar';
import InputManager from '../src/utils/InputManager';
import RacingStadium from '../src/RacingStadium';

const mockQuestion = (input) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('자동차 입력을 테스트합니다.', () => {
  test('콤마로 구분하여 자동차 이름을 배열로 얻습니다.', async () => {
    // given
    const input = 'crong,pobi,rupee';
    const answers = ['crong', 'pobi', 'rupee'];

    mockQuestion(input);

    // when
    const cars = await InputManager.inputRacingCarNames();

    // then
    expect(cars).toEqual(answers);
  });

  test('다섯 자리가 넘는 입력이 있으면 예외를 발생시키고 애플리케이션을 종료합니다.', async () => {
    // given
    const input = 'pobi,crong,pororo';

    mockQuestion(input);

    // when & then
    await expect(InputManager.inputRacingCarNames()).rejects.toThrow("[ERROR]");
  })

  test('한 자리 미만의 입력이 있으면 예외를 발생시키고 애플리케이션을 종료합니다.', async () => {
    // given
    const input = ',crong,pobi';

    mockQuestion(input);

    // when & then
    await expect(InputManager.inputRacingCarNames()).rejects.toThrow("[ERROR]");
  })

  test('중복된 이름이 존재할 때 예외를 발생시키고 애플리케이션을 종료합니다.', async () => {
    // given
    const input = 'pobi,pobi,crong';

    mockQuestion(input);

    // when & then
    await expect(InputManager.inputRacingCarNames()).rejects.toThrow("[ERROR]");
  })

  test('입력한대로 자동차가 올바르게 준비됩니다.', async () => {
    // given
    const input = 'pobi,crong,rupee';
    const answers = [new RacingCar('pobi'), new RacingCar('crong'), new RacingCar('rupee')];

    mockQuestion(input);

    // when
    const cars = await InputManager.inputRacingCarNames();

    const racingStadium = new RacingStadium();
    racingStadium.setRacingCars(cars);
    
    // then
    const readyCars = racingStadium.getRacingCars();
    expect(answers).toEqual(expect.arrayContaining(readyCars));
  });
});
