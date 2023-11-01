import Garage from '../../src/game/Garage';
import Car from '../../src/game/Car';

jest.mock('../../src/game/Car');

describe('Garage 클래스 테스트', () => {
  test('tryAllCarsMove 테스트', () => {
    const garage = new Garage(['Car1', 'Car2']);
    garage.tryAllCarsMove();

    expect(Car).toHaveBeenCalledTimes(2);
    expect(Car.mock.instances[0].tryToMove).toHaveBeenCalled();
    expect(Car.mock.instances[1].tryToMove).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('displayCarStateList 테스트', () => {
    const garage = new Garage(['Car1', 'Car2']);
    garage.displayCarStateList();

    expect(Car.mock.instances[0].printStepState).toHaveBeenCalled();
    expect(Car.mock.instances[1].printStepState).toHaveBeenCalled();
  });

  test('findCarNameByValue 테스트', () => {
    const garage = new Garage(['Car1', 'Car2']);

    Car.mock.instances[0].compareAndUpdateMaxStepCount.mockReturnValue(3);
    Car.mock.instances[1].compareAndUpdateMaxStepCount.mockReturnValue(5);
    Car.mock.instances[0].isStepCountEqualToMax.mockReturnValue(undefined);
    Car.mock.instances[1].isStepCountEqualToMax.mockReturnValue('Car2');

    const result = garage.findCarNamesWithMaxSteps();

    expect(result).toEqual(['Car2']);
  });
});