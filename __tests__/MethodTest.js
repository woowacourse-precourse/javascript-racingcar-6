import App from '../src/App.js'; // Replace with the correct path to your App class
import { MissionUtils, Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

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

describe('getCarList 메서드 테스트', () => {
  test('getCarList 메서드는 형식에 맞지않는 입력이 들어왔을경우, ERROR를 throw 해야한다.', async () => {
    //given
    const inputWithSpace = ["pobi, woni"];

    mockQuestions(inputWithSpace);

    //when
    const app = new App();
    let error;
    try {
      const carList = await app.getCarList();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 띄어쓰기 대신 쉼표로만 입력해주세요.");
  });

  test('getCarList 메서드는 자동차의 이름이 5자 이상일 때 ERROR를 throw 해야한다.', async () => {
    //given
    const inputOverLength = ["pobiwoni"];

    mockQuestions(inputOverLength);

    //when
    const app = new App();
    let error;
    try {
      const carList = await app.getCarList();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 자동차의 이름은 5자 이하여야 합니다.");
  });

  test('getCarList 메서드는 자동차의 배열을 리턴해야한다.', async () => {
    //given
    const inputs = ["pobi,woni", "1"];

    mockQuestions(inputs);

    //when
    const app = new App();
    const carList = await app.getCarList();

    //then
    expect(carList).toBeInstanceOf(Array);
    expect(carList).toHaveLength(2);
  });
});

describe('getAttempts 메서드 테스트', () => {
  test('getAttempts 메서드는 입력값이 숫자가 아니라면 ERROR를 throw 해야한다.', async () => {
    //given
    const inputs = ["t"];

    mockQuestions(inputs);

    //when
    const app = new App();
    let error;
    try {
      const attempts = await app.getAttempts();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 숫자가 잘못된 형식입니다.");
  });

  test('getAttempts 메서드는 입력값이 1보다 작다면 ERROR를 throw 해야한다.', async () => {
    //given
    const inputs = ["0"];

    mockQuestions(inputs);

    //when
    const app = new App();
    let error;
    try {
      const attempts = await app.getAttempts();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 0보다 큰 숫자를 입력해주세요.");
  });

  test('getAttempts 메서드는 숫자를 리턴해야한다.', async () => {
    //given
    const inputs = ["1"];

    mockQuestions(inputs);

    //when
    const app = new App();
    const attempts = await app.getAttempts();

    //then
    expect(attempts).toBeGreaterThan(0);
    expect(Number.isInteger(attempts)).toBe(true);
  });
});

describe('randomMoveOfCar 메서드 테스트', () => {
  test('randomMoveOfCar 메서드는 랜덤값이 4이상일때만 차들의 distance를 업데이트해야한다.', () => {
    //given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const carList = [{ name: 'pobi', distance: 0 }, { name: 'woni', distance: 0 }];

    mockRandoms([...randoms]);

    //when
    const app = new App();
    app.randomMoveOfCar(carList);

    //then
    expect(carList[0].distance).toBeGreaterThanOrEqual(4);
    expect(carList[1].distance).toBeGreaterThanOrEqual(0);
  });
});

describe('printCarPosition 메서드 테스트', () => {
  test('printCarPosition 메서드는 자동차들의 현재위치를 출력해야한다.', () => {
    //given
    const carList = [{ name: 'pobi', distance: 0 }, { name: 'woni', distance: 3 }, { name: 'hodi', distance: 5 }];
    const expectedOutputs = [
      'pobi : ',
      'woni : ---',
      'hodi : -----'
    ];

    const logSpy = getLogSpy();

    //when
    const app = new App();
    app.printCarPosition(carList);

    //then
    expect(logSpy.mock.calls.map(call => call[0])).toEqual(expectedOutputs);
  });
});

describe('printWinner 메서드는 자동차들 중 distance의 값이 제일 큰 자동차를 출력해야한다.', () => {
  test('printWinner 메서드는 자동차들 중 distance의 값이 제일 큰 자동차를 출력해야한다.', () => {
    //given
    const carList = [{ name: 'pobi', distance: 0 }, { name: 'woni', distance: 3 }, { name: 'hodi', distance: 5 }];
    const expectedOutput = "최종 우승자 : hodi";

    const logSpy = getLogSpy();

    //when
    const app = new App();
    app.printWinner(carList);

    //then
    expect(logSpy.mock.calls[0][0]).toEqual(expectedOutput);
  });

  test('만약, 공동우승자가 있다면 입력받은 순서대로 출력해야한다.', () => {
    //given
    const carList = [{ name: 'pobi', distance: 5 }, { name: 'woni', distance: 3 }, { name: 'hodi', distance: 5 }];
    const expectedOutput = "최종 우승자 : pobi, hodi";

    const logSpy = getLogSpy();

    //when
    const app = new App();
    app.printWinner(carList);

    //then
    expect(logSpy.mock.calls[0][0]).toEqual(expectedOutput);
  });
});

