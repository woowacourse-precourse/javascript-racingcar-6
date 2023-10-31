import CarService from '../../src/services/carService';

describe('carService 테스트', () => {
  const carService = new CarService();

  test('초기 carList는 비어있다', () => {
    const carList = carService.getCarList();
    expect(carList).toHaveLength(0);
  });

  test('carList에 car를 추가할 수 있다', () => {
    const input = 'lys';
    carService.addCar(input);
    const carList = carService.getCarList();
    expect(carList).toHaveLength(1);
  });
});
