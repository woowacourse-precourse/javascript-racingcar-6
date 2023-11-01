import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car";
import ERROR_MESSAGES from "../src/constant/errorMessages";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 클래스', () => {
  test('문자열이 아닌 타입을 생성자 매개변수로 전달', () => {
    expect(() => new Car(1234)).toThrow(ERROR_MESSAGES.stringType);
  });

  test('모의함수를 사용하여 4이상의 값으로 설정하여 전진 횟수를 확인한다', () => {
    const name = 'pobbi';
    const MOVING = 4;
    const STOP = 3;
    const randoms = [MOVING, STOP, MOVING, STOP];
    const output = [1,1,2,2];
    const car = new Car(name);
    mockRandoms([...randoms]);

    output.forEach((node) => {
      expect(car.move()).toBe(node);
    });
  });
  test('이름과 전진한 횟수의 반환값을 확인한다', () => {
    const name = 'test';
    const MOVING = 9;
    const MOVING_COUNT = 1;
    mockRandoms([MOVING]);
    const car = new Car(name);
    car.move();

    expect(car.getName()).toBe('test');
    expect(car.getMoveCount()).toBe(MOVING_COUNT);
  });

  test('이름과 전진한 결과를 출력하여 비교한다', () => {
    const cars = [];
    const names = ['test', 'tmp']
    names.forEach((name) => {
      cars.push(new Car(name));
    });
    const MOVING = 9;
    const stop = 3;
    const random = [MOVING, MOVING, MOVING, stop];
    const logSpy = getLogSpy();
    const outputs = ['test : --', 'tmp : -'];

    mockRandoms([...random]);
    cars.forEach((car) => {
      car.move();
      car.move();
      car.print();
    });
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    })
  });
});