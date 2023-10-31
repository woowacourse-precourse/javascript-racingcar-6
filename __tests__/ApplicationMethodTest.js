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
    const min = 4;
    const max = 9;

    // when
    const racingMethod = new RacingCarGame();

    // then
    const result = racingMethod.checkForwardCondition(number, { min, max });
    expect(result).toBe(true);
  });

  test('increaseForwardCountRandomly: 랜덤한 값을 기준 전진이 올바르게 되는지', () => {
    // given
    const carStatusArray = [
      { name: 'car1', forwardCount: 0 },
      { name: 'car2', forwardCount: 1 },
    ];
    gameUtils.getRandomNumber = jest.fn().mockReturnValue(5);

    // when
    const racingMethod = new RacingCarGame();
    // 항상 5를 반환해서 전진할 수 있도록

    // then
    const result = racingMethod.increaseForwardCountRandomly(carStatusArray);
    result.forEach((carStatus, index) => {
      expect(carStatus).toEqual({
        name: `car${index + 1}`,
        forwardCount: carStatusArray[index].forwardCount + 1,
      });
    });
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
