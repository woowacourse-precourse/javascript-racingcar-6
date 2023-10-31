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
    const testPrint = ['pobi : -', 'woni : --', 'jun : ---', ''];

    computer.pushCarList('pobi,woni,jun');

    for (let j = 0; j < 3; j += 1) {
      for (let i = j; i < 3; i += 1) {
        computer.carList[i].goingCount = true;
      }
    }

    computer.printResult();

    for (let i = 0; i < 3; i += 1) {
      expect(logSpy).toHaveBeenNthCalledWith(i + 1, testPrint[i]);
    }

    expect(logSpy).toHaveBeenNthCalledWith(4, '');
  });

  test('playRound 메서드 테스트', () => {
    const computer = new Computer();
    const logSpy = getLogSpy();
    const testNumbers = [4, 2, 7];
    const testPrint = ['pobi : -', 'woni : ', 'jun : -', ''];

    mockRandom(testNumbers);
    computer.pushCarList('pobi,woni,jun');
    computer.playRound();

    for (let i = 0; i < 3; i += 1) {
      const data = (i + 1) % 2;

      expect(computer.carList[i].goingCount).toEqual(data);
      expect(logSpy).toHaveBeenNthCalledWith(i + 1, testPrint[i]);
    }

    expect(logSpy).toHaveBeenNthCalledWith(4, '');
  });

  test('judgeWinner 메서드 테스트', () => {
    const computer = new Computer();
    const logSpy = getLogSpy();
    const testNumber = [4, 2, 5, 7, 7];

    computer.pushCarList('pobi,john,jay,mike,aaaaa');

    for (let i = 0; i < 5; i += 1) {
      for (let j = 0; j < testNumber[i]; j += 1) {
        computer.carList[i].goingCount = true;
      }
    }

    computer.judgeWinner();
    expect(logSpy).toHaveBeenNthCalledWith(1, '최종 우승자 : mike, aaaaa');
  });

  test('finish 메서드 테스트', () => {
    const computer = new Computer();
    const logSpy = getLogSpy();
    const testNumbers = [2, 4, 5, 1, 0, 8, 9, 9, 1];
    const testPrint = ['pobi : ', 'woni : -', 'jun : -', 'pobi : ', 'woni : -', 'jun : --', 'pobi : -', 'woni : --', 'jun : --'];

    mockRandom(testNumbers);

    computer.pushCarList('pobi,woni,jun');
    computer.round = 3;

    computer.finish();

    expect(logSpy).toHaveBeenNthCalledWith(1, '');
    expect(logSpy).toHaveBeenNthCalledWith(2, '실행 결과');
    for (let i = 0; i < 3; i += 1) expect(logSpy).toHaveBeenNthCalledWith(i + 3, testPrint[i]);
    expect(logSpy).toHaveBeenNthCalledWith(6, '');
    for (let i = 3; i < 6; i += 1) expect(logSpy).toHaveBeenNthCalledWith(i + 4, testPrint[i]);
    expect(logSpy).toHaveBeenNthCalledWith(10, '');
    for (let i = 6; i < 9; i += 1) expect(logSpy).toHaveBeenNthCalledWith(i + 5, testPrint[i]);
    expect(logSpy).toHaveBeenNthCalledWith(14, '');
    expect(logSpy).toHaveBeenNthCalledWith(15, '최종 우승자 : woni, jun');
  });
});
