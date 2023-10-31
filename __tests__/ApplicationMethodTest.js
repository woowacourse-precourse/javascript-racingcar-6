import { Console } from '@woowacourse/mission-utils';
import RacingCarGame from '../src/game';
import gameUtils from '../src/game/game.utils';

describe('자동차 경주 게임 세부 메서드 테스트', () => {
  test('makeCarsWithForwardCount: 이름 배열을 통해 전진 정보를 포함하는 객체를 담은 배열로 리턴 ', () => {
    // given
    const carNames = ['car1', 'car2', 'car3'];

    // when
    const racingMethod = new RacingCarGame();
    const result = racingMethod.makeCarsWithForwardCount(carNames);

    // then
    carNames.forEach((name, index) => {
      expect(result[index]).toEqual({ name, forwardCount: 0 });
    });
  });

  test('checkForwardCondition: 전진 조건에 해당하는지', () => {
    // given
    const number = 5;

    // when
    const racingMethod = new RacingCarGame();

    // then
    const result = racingMethod.checkForwardCondition(number);
    expect(result).toBe(true);
  });

  test('checkIncreaseForwardCountRandomly: 랜덤한 값을 생성하고 전진 조건에 부합하는지 검사', () => {
    // given
    gameUtils.getRandomNumber = jest.fn().mockReturnValue(5);

    // when
    const racingMethod = new RacingCarGame();

    // then
    expect(racingMethod.checkIncreaseForwardCountRandomly()).toBe(true);
  });

  test('printRacingTurn: 자동차 정보를 통해 dash로 해당 정보를 의도대로 문자열로 출력하는지', () => {
    // given
    const carStatusArray = [
      { name: 'car1', forwardCount: 2 }, // car1 : --
      { name: 'car2', forwardCount: 3 }, // car2 : ---
    ];
    Console.print = jest.fn();

    // when
    const racingMethod = new RacingCarGame();
    racingMethod.printRacingTurn(carStatusArray);

    // then
    const result = 'car1 : --\ncar2 : ---\n';
    expect(Console.print).toHaveBeenCalledWith(result);
  });

  test('updateCarStatusForCondition: 조건에 부합하는 자동차의 전진 상태를 업데이트', () => {
    // given
    const carStatusArray = [
      { name: 'car1', forwardCount: 2 },
      { name: 'car2', forwardCount: 3 },
    ];

    // when
    const racingMethod = new RacingCarGame();
    racingMethod.checkIncreaseForwardCountRandomly = jest
      .fn()
      .mockReturnValue(true);

    // then
    const result = racingMethod.updateCarStatusForCondition(carStatusArray);
    const expectedResult = [
      { name: 'car1', forwardCount: 3 },
      { name: 'car2', forwardCount: 4 },
    ];
    expect(result).toEqual(expectedResult);
  });

  test('getWinner: 우승자를 반환', () => {
    // given
    const carStatusArray = [
      { name: 'car1', forwardCount: 2 },
      { name: 'car2', forwardCount: 3 }, // 우승
      { name: 'car3', forwardCount: 3 }, // 우승
    ];

    // when
    const racingMethod = new RacingCarGame();

    // then
    const result = racingMethod.getWinner(carStatusArray);
    expect(result).toEqual(['car2', 'car3']);
  });

  test('printWinner: 자동차들 중 forwardCount가 가장 높은 우승자를 출력', () => {
    // given
    const carStatusArray = [
      { name: 'car1', forwardCount: 2 },
      { name: 'car2', forwardCount: 3 }, // 우승
      { name: 'car3', forwardCount: 3 }, // 우승
    ];
    Console.print = jest.fn();

    // when
    const racingMethod = new RacingCarGame();
    racingMethod.printWinner(carStatusArray);

    // then
    const result = '최종 우승자 : car2, car3';
    expect(Console.print).toHaveBeenCalledWith(result);
  });
});
