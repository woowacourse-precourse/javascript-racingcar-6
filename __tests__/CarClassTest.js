import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
  test('Car 인스턴스 생성 테스트. 인스턴스 생성 시, 전달한 인자로 멤버변수 name을 초기화한다.', () => {
    const car = new Car('hyun');
    expect(car.name).toBe('hyun');
  });

  test('Car 인스턴스 생성 테스트. 인스턴스 생성 시, 멤버변수 moveCount를 0으로 초기화한다.', () => {
    const car = new Car('hyun');
    expect(car.moveCount).toBe(0);
  });

  test('generateRandomNumber 메서드 테스트. 0에서 9사이의 무작위 숫자를 생성한다.', () => {
    const car = new Car('hyun');
    car.generateRandomNumber().then((randomNumber) => {
      expect(randomNumber).toBeGreaterThan(0);
      expect(randomNumber).toBeLessThan(10);
    });
  });

  test('getIsCanMove 메서드 테스트. 무작위 숫자가 4 이상일 경우 true를 반환한다.', () => {
    const car = new Car('hyun');
    expect(car.getIsCanMove(4)).toBe(true);
  });

  test('getIsCanMove 메서드 테스트. 무작위 숫자가 4보다 작을 경우 false를 반환한다.', () => {
    const car = new Car('hyun');
    expect(car.getIsCanMove(3)).toBe(false);
  });

  test('updateMoveCount 메서드 테스트. 클래스의 멤버변수 moveCount를 1 증가시킨다.', () => {
    const car = new Car('hyun');
    const prevMoveCount = car.moveCount;
    car.updateMoveCount();
    expect(car.moveCount).toBe(prevMoveCount + 1);
  });
});
