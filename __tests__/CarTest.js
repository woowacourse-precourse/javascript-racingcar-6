import Car from '../src/Model/Car';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Car 클래스 단위 테스트', () => {
  test('자동차의 전진 조건인 1에서 9 사이의 무작위 값이 4이상이면 true값 반환', () => {
    const randomNumber = [5];
    const name = 'mike';
    const car = new Car();

    mockRandoms(randomNumber);

    expect(car.isReadyToRunForward()).toBeTruthy();
  });

  test('자동차의 전진 조건인 1에서 9 사이의 무작위 값이 4미만이면 false값 반환', () => {
    const randomNumber = [3];
    const name = 'mike';
    const car = new Car();

    mockRandoms(randomNumber);

    expect(car.isReadyToRunForward()).toBeFalsy();
  });

  test('runForward 메서드가 실행되면 distance의 값이 1 증가', () => {
    const name = 'mike';
    const car = new Car();

    car.runForward();

    expect(car.getDistance()).toEqual(1);
  });

  test('getName 메서드로 이름 값을 반환', () => {
    const name = 'paul';
    const car = new Car(name);

    expect(car.getName()).toEqual(name);
  });  
});
