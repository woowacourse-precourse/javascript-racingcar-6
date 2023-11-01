import InputValue from '../src/InputValue';

describe('사용자 입력', () => {
  test('자동차 이름 배열로 각 자동차 이름과 전진한 정도를 담는 2차원 배열 만들기', () => {
    const arr = ['pobi', 'woni', 'jun'];
    expect(InputValue.createCarArr(arr)).toEqual([{ carName: 'pobi', forward: 0 }, { carName: 'woni', forward: 0 }, { carName: 'jun', forward: 0 }]);
  });
});