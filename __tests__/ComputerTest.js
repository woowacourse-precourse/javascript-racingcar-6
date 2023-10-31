import Computer from '../src/module/Computer.js';
import Car from '../src/module/Car.js';

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

  test('pushCarList 테스트', () => {
    const computer = new Computer();
    const testArray = [];

    for (let i = 1; i < 6; i++){
      testArray.push(generateObject(i.toString()));
    }

    computer.pushCarList('1,2,3,4,5');
    expect(computer.carList).toEqual(testArray);
  })
});