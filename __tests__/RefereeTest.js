import { Referee } from '../src/domains/index.js';
import { MESSAGE } from '../src/constants/index.js';

const makeMovement = (length) =>
  Array.from({ length: length }, () => MESSAGE.movement);

const makeCar = (name, length) => ({
  name: name,
  movement: makeMovement(length),
});

describe('자동차 경주 : 심판 테스트', () => {
  test('전진 비교', () => {
    const CAR_ARRAY = [
      makeCar('car1', 3),
      makeCar('car2', 0),
      makeCar('winner', 4),
    ];
    const EXPECTED_RESULT = 'winner,car1,car2';

    const comparedMovement = Referee.compareMovement(CAR_ARRAY);

    expect(comparedMovement.map((v) => v.name).join(',')).toBe(EXPECTED_RESULT);
  });

  test('우승 점수 판단', () => {
    const WINNER_POINT = 4;
    const COMPARED_MOVEMENT = [
      makeCar('winner', WINNER_POINT),
      makeCar('car1', WINNER_POINT - 1),
      makeCar('car2', WINNER_POINT - 2),
    ];

    expect(Referee.getWinnerPoint(COMPARED_MOVEMENT)).toEqual(WINNER_POINT);
  });

  test('우승자 판단: 단일 우승자', () => {
    const CAR_ARRAY = [
      makeCar('car1', 3),
      makeCar('car2', 0),
      makeCar('winner', 4),
    ];

    const result = Referee.decideGameResult(CAR_ARRAY);

    expect(result.join('')).toBe('winner');
  });

  test('우승자 판단: 공동 우승자', () => {
    const CAR_ARRAY = [
      makeCar('car1', 3),
      makeCar('winner1', 4),
      makeCar('winner2', 4),
    ];
    const WINNERS = 'winner1, winner2';

    const result = Referee.decideGameResult(CAR_ARRAY);

    expect(result.join(', ')).toBe(WINNERS);
  });
});
