import GetCarsName from '../src/GetCarsName.js';
import { getCarsNameConstant } from '../src/Constant.js';

const testGetCarsName = new GetCarsName();

describe('자동차 이름 입력 받기 테스트', () => {
  test('stringToList', () => {
    const carsString = '12,34,56,78';

    const carsList = testGetCarsName.stringToList(carsString);
    expect(carsList).toEqual(['12', '34', '56', '78']);
  });

  test('validate', () => {
    const carsList = ['12', '34', '1234567'];
    const validCarsList = ['12', '34', '56'];

    expect(() => {
      testGetCarsName.validate(carsList);
    }).toThrow(getCarsNameConstant.NAME_LENGTH_LIMIT_ERROR);
  });
});
