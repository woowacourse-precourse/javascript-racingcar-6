import { Console } from '@woowacourse/mission-utils';
import getRacingCars from '../../src/functions/startRacing/getRacingCars';

const mockQuestion = (input) => {
  Console.readLineAsync = jest.fn(() => Promise.resolve(input));
};

describe('getRacingCars 함수 테스트', () => {
  test('경주차 입력 문자열은 "," 기준으로 구분해 리스트로 반환되어야함', async () => {
    // given
    const input = 'car1,car2';
    mockQuestion(input);

    // when
    const racingCars = await getRacingCars();

    // then
    await expect(racingCars).toContain('car1', 'car2');
  });

  test('경주차 이름 입력이 하나일 때 처리', async () => {
    // given
    const input = 'car1';
    mockQuestion(input);

    // when
    const racingCars = await getRacingCars();

    // then
    expect(racingCars).toContain('car1');
  });

  test('경주차 이름 5자 이상일 때, 예외처리', async () => {
    // given
    const input = 'superFastCar,superSlowCar';
    mockQuestion(input);

    // when
    const racingCars = getRacingCars();

    // then
    await expect(racingCars).rejects.toThrow('[ERROR]');
  });

  test('경주차 입력 ","가 연속으로 있을 때, 예외처리', async () => {
    // given
    const input = 'car1,,car2';
    mockQuestion(input);

    // when
    const racingCars = getRacingCars();

    // then
    await expect(racingCars).rejects.toThrow('[ERROR]');
  });
  test('경주차 입력에 공백이 있을 때, 공백을 제거하고 반환', async () => {
    // given
    const input = 'car1, car2 , car3';
    mockQuestion(input);

    // when
    const racingCars = await getRacingCars();

    // then
    expect(racingCars).toContain('car1', 'car2', 'car3');
  });
});
