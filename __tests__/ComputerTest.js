import Computer from '../src/module/Computer.js';
import Car from '../src/module/Car.js';
import {MissionUtils} from "@woowacourse/mission-utils";

const mockInput = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

function generateObject(input) {
  const car = new Car();

  car.name = input;

  return car;
}

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

    for (let i = 1; i < 6; i++) {
      testArray.push(generateObject(i.toString()));
    }

    computer.pushCarList('1,2,3,4,5');

    expect(computer.carList).toEqual(testArray);
  });

  test('start 메서드 테스트', async () => {
    const testCase = ['pobi,woni,jun', 5];
    const testText = ['pobi','woni','jun'];
    const computer = new Computer();
    const testArray = [];
    const testValue = 5;

    mockInput(testCase);
    await computer.start();

    for (let i = 0; i < 3; i++) {
      testArray.push(generateObject(testText[i]));
    }

    expect(computer.carList).toStrictEqual(testArray);
    expect(computer.round).toEqual(testValue);
  });
});