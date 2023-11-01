import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

describe('getCarName 메서드 테스트', () => {
  MissionUtils.Console.readLineAsync = jest.fn();

  test('입력값이 없거나 공백인 경우', async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('');

    const app = new App();

    await expect(app.getCarName()).rejects.toThrow('[ERROR] 입력된 값이 없거나 공백입니다.');
  });

  test('입력값이 5자 이상인 경우', async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('longname');

    const app = new App();

    await expect(app.getCarName()).rejects.toThrow('[ERROR] 자동차 이름은 5자 이하로 작성 가능합니다.');
  });

  test('중복된 이름이 있는 경우', async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('pobi,pobi');

    const app = new App();

    await expect(app.getCarName()).rejects.toThrow('[ERROR] 중복된 이름이 있습니다.');
  });

  test('유효한 입력 값', async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('pobi,woni,jun');

    const app = new App();

    await expect(app.getCarName()).resolves.toEqual(['pobi', 'woni', 'jun']);
  });
});

describe('getNumberOfAttempts 메서드 테스트', () => {
  MissionUtils.Console.readLineAsync = jest.fn();

  test('입력값이 문자인 경우', async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('notNumber');

    const app = new App();

    await expect(app.getNumberOfAttempts()).rejects.toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
  });
});

describe('checkStopOrGo 메서드 테스트', () => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  test('모든 자동차가 정지', async () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(2);

    const racingCars = [
      { name: 'car1', position: '-' },
      { name: 'car2', position: '-' },
    ];

    const app = new App();

    app.checkStopOrGo(racingCars);

    racingCars.forEach(car => {
      expect(car.position).toBe('-');
    });
  });

  test('모든 자동차가 전진', async () => {
    MissionUtils.Random.pickNumberInRange.mockReturnValue(5);

    const racingCars = [
      { name: 'car1', position: '' },
      { name: 'car2', position: '' },
    ];

    const app = new App();

    app.checkStopOrGo(racingCars);

    racingCars.forEach(car => {
      expect(car.position).toBe('-');
    });
  });

  test('일부 자동차는 멈추고 일부 자동차는 전진하는 경우', () => {
    const randomValues = [0, 9, 5, 3, 8];

    MissionUtils.Random.pickNumberInRange.mockImplementation(() => randomValues.shift());

    const racingCars = [
      { name: 'car1', position: '-' },
      { name: 'car2', position: '' },
    ];

    const app = new App();

    app.checkStopOrGo(racingCars);

    const firstCar = racingCars[0];
    const secondCar = racingCars[1];

    expect(firstCar.position).toBe('-');
    expect(secondCar.position).toBe('-');
  });
});

describe('generateRacingState 메서드 테스트', () => {
  test('자동차가 한 대인 경우', () => {
    const cars = [{ name: 'car1', position: '--' }];

    const app = new App();

    expect(app.generateRacingState(cars)).toBe('car1 : --');
  });

  test('여러 대의 자동차가 있는 경우', () => {
    const cars = [
      { name: 'car1', position: '--' },
      { name: 'car2', position: '---' },
      { name: 'car3', position: '-' },
    ];

    const app = new App();

    expect(app.generateRacingState(cars)).toBe('car1 : --\ncar2 : ---\ncar3 : -');
  });
});

describe('findRacingWinner 메서드 테스트', () => {
  test('한 대의 자동차가 우승한 경우', () => {
    const cars = [{ name: 'car1', position: '--' }];

    const app = new App();
    const result = app.findRacingWinner(cars);

    expect(result).toBe('car1');
  });

  test('공동 우승한 경우', () => {
    const cars = [
      { name: 'car1', position: '--' },
      { name: 'car2', position: '---' },
      { name: 'car3', position: '---' },
    ];

    const app = new App();
    const result = app.findRacingWinner(cars);

    expect(result).toBe('car2, car3');
  });

  test('모든 자동차가 우승한 경우', () => {
    const cars = [
      { name: 'car1', position: '--' },
      { name: 'car2', position: '--' },
      { name: 'car3', position: '--' },
    ];

    const app = new App();
    const result = app.findRacingWinner(cars);

    expect(result).toBe('car1, car2, car3');
  });
});
