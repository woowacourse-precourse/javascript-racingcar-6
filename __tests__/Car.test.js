import Car from '../src/Car.js';

const move = (carInstance, moveDistance) => {
  Array.from({ length: moveDistance }).forEach(() => {
    const MOVE_DISTANCE_PER_ROUND = 1;
    carInstance.move(MOVE_DISTANCE_PER_ROUND);
  });
};

describe('자동차 이동 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('타요');
  });

  test('3회 이동 테스트', () => {
    const MOVE_DISTANCE = 3;
    move(car, MOVE_DISTANCE);

    expect(car.record()).toEqual(['타요', 3]);
  });

  test('5회 이동 테스트', () => {
    const MOVE_DISTANCE = 5;
    move(car, MOVE_DISTANCE);

    expect(car.record()).toEqual(['타요', 5]);
  });

  test('3회 이동, 스탑, 5회이동 테스트', () => {
    let MOVE_DISTANCE = 3;
    move(car, MOVE_DISTANCE);
    car.stop();

    MOVE_DISTANCE = 5;
    move(car, MOVE_DISTANCE);
    expect(car.record()).toEqual(['타요', 8]);
  });
});

describe('자동차이름 테스트', () => {
  test('자동차 이름이 ㅅㅂ 인 경우 유효성 검사', () => {
    expect(() => {
      const input = 'ㅅㅂ';
      new Car(input);
    }).toThrow('[ERROR]');
  });

  test('자동차 이름이 시발자동차 인 경우 유효성 검사', () => {
    expect(() => {
      const input = '시발자동차';
      new Car(input);
    }).toThrow('[ERROR]');
  });

  test('자동차 이름이 자동차 인 경우 유효성 검사', () => {
    expect(() => {
      const input = '자동차';
      new Car(input);
    }).not.toThrow('[ERROR]');
  });
});
