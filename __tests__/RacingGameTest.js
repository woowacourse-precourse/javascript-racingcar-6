import App from '../src/App.js';
import Car from '../src/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('랜덤 숫자 생성 기능 테스트', () => {
  test('0에서 9 사이의 무작위 값을 생성', () => {
    const car = new Car('aria');
    const result = car.createRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
  });
});

describe('자동차 전진 또는 정지 기능 테스트', () => {
  test('자동차가 전진하는 경우 1칸 이동', () => {
    const car = new Car('aria');
    const randoms = [5];

    mockRandoms([...randoms]);
    car.makeStepForwardOrStop();

    const result = car.step;

    expect(result).toEqual(1);
  });

  test('자동차가 정지하는 경우 변화 없음', () => {
    const car = new Car('aria');
    const randoms = [3];

    mockRandoms([...randoms]);
    car.makeStepForwardOrStop();

    const result = car.step;

    expect(result).toEqual(0);
  });
});

describe('실행 결과 출력 기능 테스트', () => {
  test('각 자동차 전진 결과에 대한 실행 결과 출력', async () => {
    const cars = [new Car('aria'), new Car('evan')];
    const randoms = [4, 3];
    const outputs = ['aria : -', 'evan :'];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    const app = new App();
    app.printOneRacingResult(cars);

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('최종 우승자 출력 기능 테스트', () => {
  test('단독 우승자인 경우 그대로 안내 문구 출력', () => {
    const carA = new Car('aria');
    const carB = new Car('evan');
    const cars = [carA, carB];
    const output = '최종 우승자 : aria';
    const logSpy = getLogSpy();

    carA.step = 3;
    carB.step = 2;

    const app = new App();
    const winners = app.calculateFinalWinner(cars);
    app.printFinalWinner(winners);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test('공동 우승자인 경우 쉼표로 구분하여 안내 문구 출력', () => {
    const carA = new Car('aria');
    const carB = new Car('evan');
    const carC = new Car('jack');
    const cars = [carA, carB, carC];
    const output = '최종 우승자 : aria,jack';
    const logSpy = getLogSpy();

    carA.step = 3;
    carB.step = 2;
    carC.step = 3;

    const app = new App();
    const winners = app.calculateFinalWinner(cars);
    app.printFinalWinner(winners);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});
