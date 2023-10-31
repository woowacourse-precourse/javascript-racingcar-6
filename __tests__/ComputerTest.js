import Computer from '../src/module/Computer.js';
import Car from '../src/module/Car.js';
import {MissionUtils} from "@woowacourse/mission-utils";

function mockInput(inputs) {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

// 테스트를 위한 이름 값이 초기화된 Car 객체 생성해주는 함수
function generateObject(input) {
  const car = new Car();

  car.name = input;

  return car;
}

function mockRandom(inputs) {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
    const input = inputs.shift();

    return input;
  });
}

function getLogSpy() {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");

  logSpy.mockClear();

  return logSpy;
};

describe('Computer 클래스 테스트', () => {
  test('round의 getter, setter 테스트', () => {
    const computer = new Computer();

    computer.round = 3;

    expect(computer.round).toEqual(3);
    expect(() => {
      computer.round = -1;
    }).toThrow('[ERROR]');
  });

  test('pushCarList 메서드 테스트', () => {
    const computer = new Computer();
    const testArray = [];

    for (let i = 1; i < 6; i += 1) {
      testArray.push(generateObject(i.toString()));
    }

    computer.pushCarList('1,2,3,4,5');

    expect(computer.carList).toEqual(testArray);
  });

  test('start 메서드 테스트', async () => {
    const testCase = ['pobi,woni,jun', 5];
    const testText = ['pobi', 'woni', 'jun'];
    const computer = new Computer();
    const testArray = [];
    const testValue = 5;

    mockInput(testCase);
    await computer.start();

    for (let i = 0; i < 3; i += 1) {
      testArray.push(generateObject(testText[i]));
    }

    expect(computer.carList).toStrictEqual(testArray);
    expect(computer.round).toEqual(testValue);
  });

  test('judgeRandomNumber 메서드 테스트', () => {
    const computer = new Computer();
    const testNumbers = [7, 6, 5, 4, 3];

    mockRandom(testNumbers);
    for (let i = 0; i < 4; i += 1) expect(computer.judgeRandomNumber()).toBeTruthy();
    expect(computer.judgeRandomNumber()).toBeFalsy();
  });

  test('printResult 메서드 테스트', () => {
    const computer = new Computer();
    const logSpy = getLogSpy();

    computer.pushCarList('pobi,woni,jun');

    for (let j = 0; j < 3; j += 1) {
      for (let i = j; i < 3; i += 1) {
        computer.carList[i].goingCount = true;
      }
    }

    computer.printResult();

    expect(logSpy).toHaveBeenNthCalledWith(1, 'pobi : -');
    expect(logSpy).toHaveBeenNthCalledWith(2, 'woni : --');
    expect(logSpy).toHaveBeenNthCalledWith(3, 'jun : ---');
    expect(logSpy).toHaveBeenNthCalledWith(4, '');

  });
});
