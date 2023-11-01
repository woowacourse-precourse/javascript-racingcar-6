import Cars from '../src/model/Cars.js';

describe('Cars 클래스 함수 test', () => {
  let cars;
  beforeEach(() => {
    cars = new Cars();
  });

  test('cars의 초기 객체 값 확인', () => {
    expect(cars).toEqual({ list: [], times: 0 });
  });

  // 이름이 나열되어있는 배열을 받아 setList()함수가 실행되면 그에 맞는 객체가 생성
  test('setList()함수 호출 후 객체 값 확인', () => {
    const tempList = ['alice', 'bob'];
    cars.setList(tempList);
    expect(cars.list).toEqual([
      { name: 'alice', distance: '' },
      { name: 'bob', distance: '' },
    ]);
  });

  test('setImes()함수 호출 후 객체 값 확인', () => {
    const tempTimes = 5;
    cars.setTimes(tempTimes);
    expect(cars.times).toBe(5);
  });
});
