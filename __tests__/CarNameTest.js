import { VALUE } from '../src/constants/constants.js';
import Car from '../src/model/Car.js';
import { checkLessThanFive, checkHasSpace, checkDuplicated } from '../src/utils/Validation.js';

describe('올바른 car 객체 판단 테스트', () => {
  const carList = ['아빠차', '엄마차', '내차'];

  test('자동차 객체 생성 테스트', () => {
    const testList = carList.map((car) => new Car(car, VALUE.INITIAL_DISTANCE));
    testList.forEach((car, index) =>
      expect(car.getName()).toEqual(carList.at(index)),
    );
  });

  test('[detail] 5글자가 넘을 때 오류 테스트', () => {
    const longNameList = ['우아한테크코스', '우아한형제들', '우리가어떤민족'];

    expect(() => checkLessThanFive(longNameList)).toThrow();
  });

  test('[detail] 공백포함 테스트', () => {
    const spaceNameList = ['우아한 테크코스', '우아한 형제들', '우리가 어떤민족'];

    expect(() => checkHasSpace(spaceNameList)).toThrow();
  });

  test('[detail] 중복된 이름 테스트', () => {
    const duplicatedNameList = ['Do', 'Do', 'Your', 'Best'];

    expect(() => checkDuplicated(duplicatedNameList)).toThrow();
  });
});
