import Car from '../src/car.js'; // Car 클래스가 정의된 파일의 경로로 수정하세요

describe('Car 클래스 테스트', () => {
  test('Car 클래스 생성 시 초기 속성 설정', () => {
    const car = new Car('TestCar', 0);

    expect(car.name).toBe('TestCar');
    expect(car.position).toBe(0);
  });
});
