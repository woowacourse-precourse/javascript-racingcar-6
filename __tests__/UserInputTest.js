import RaceController from '../src/controllers/RaceController';
import Car from '../src/models/Car';

describe('유저 입력값 테스트', () => {
  test('인스턴스 Car를 생성하여 리스트에 담는지 확인', () => {
    expect(RaceController.createCarList(['a', 'b', 'c'])).toEqual([
      new Car('a'),
      new Car('b'),
      new Car('c'),
    ]);
    expect(RaceController.createCarList(['a'])).toEqual([new Car('a')]);
  });

  test('리스트 내 중복 확인', () => {
    expect(RaceController.checkSameCarName(['a', 'a', 'a'])).toEqual(true);
    expect(RaceController.checkSameCarName(['a', 'b', 'c'])).toEqual(false);
  });
  test('리스트 내 6글자 이상의 값이 있는지 확인인', () => {
    // prettier-ignore
    expect(RaceController.checkCarNameLength(['a', 'a', 'abcdefg'])).toEqual(true);
    expect(RaceController.checkCarNameLength(['a', 'b', 'c'])).toEqual(false);
  });
  test('리스트 내 공백 확인', () => {
    expect(RaceController.checkCarNameVoid(['a', 'b', 'c'])).toEqual(false);
    expect(RaceController.checkCarNameVoid(['a', 'b', ''])).toEqual(true);
  });
});
