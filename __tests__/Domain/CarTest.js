import Car from '../../src/Domain/Car';
import CAR from '../../src/constants/car';

describe('Car 테스트', () => {
  const validName = ['pobi', 'crong', 'honux'];
  const invalidName = ['pengooseDev', 'thisIsTooLong'];
  let car;

  beforeEach(() => {
    // 각 테스트 전에 새로운 Car 인스턴스 생성
    car = new Car('pobi');
  });

  describe('자신의 이름(name)과 현재 위치(position)를 생성자에서 초기화한다.', () => {
    validName.forEach((name) => {
      test(`${name} : 오빠 차 뽑았다`, () => {
        // when
        const namedCar = new Car(name);

        // then
        expect(namedCar.getName()).toBe(name);
      });

      test('기본 위치는 0이다.', () => {
        const initialPosition = car.getPosition();

        expect(initialPosition).toBe(0);
      });
    });

    invalidName.forEach((tooLongName) => {
      test(`자동차 이름이 5자를 초과하는 경우 예외 처리를 진행한다. (${tooLongName})`, () => {
        // when
        const createInvalidCar = () => new Car(tooLongName);

        // then
        expect(createInvalidCar).toThrow();
      });
    });
  });

  describe('전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다', () => {
    // given
    const shouldMoveCases = [4, 5, 6, 7, 8, 9];
    const shouldNotMoveCases = [0, 1, 2, 3];

    shouldMoveCases.forEach((number) => {
      test(`4 이상의 숫자가 주어지면 전진한다(${number})`, () => {
        const initialPosition = car.getPosition();
        car.move(number);

        expect(car.getPosition()).toBe(initialPosition + CAR.movement.unit);
      });
    });

    shouldNotMoveCases.forEach((number) => {
      test(`4 미만의 숫자가 주어지면 정지한다(${number})`, () => {
        const initialPosition = car.getPosition();
        car.move(number);

        expect(car.getPosition()).toBe(initialPosition);
      });
    });
  });
});
