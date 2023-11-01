import Car from '../model/Car';
import DataProcess from '../view/DataProcess';
import InputView from '../view/InputView';
import ValidatingTheValue from '../view/ValidatingTheValue';

const ConductGame = async () => {
  const carNames = ValidatingTheValue.checkCarNames(await InputView.inputCarName());
  const cars = new Set(carNames.map((carName) => new Car(carName)));
  const repeatCount = ValidatingTheValue.checkRepeatCount(await InputView.inputRepeatCount());
  const moveOrderCar = () => cars.forEach((car) => car.oneStepForward());
  const repeatTransOutputFormDistance = () => cars.forEach((car) => (
    DataProcess.transOutputFormDistance(car.getName(), car.getDistance())
  ));
  const showDistanceOrderCar = () => {
    repeatTransOutputFormDistance(cars);
    DataProcess.endLine();
  };
  const repeatOrderGoToCar = () => {
    for (let count = 0; count < repeatCount; count += 1) {
      moveOrderCar();
      showDistanceOrderCar();
    }
  };
  const searchMaxDistance = (newCars) => Math.max(...newCars.map((car) => car.getDistance()));
  const searchWinners = (newCars, maxDistance) => (
    newCars.filter((car) => car.getDistance() === maxDistance).map((car) => car.getName())
  );
  const showWhoWinner = (newCars = [...cars]) => {
    const maxDistance = searchMaxDistance(newCars);
    const winners = searchWinners(newCars, maxDistance);
    DataProcess.transOutputFormWinner(winners);
  };
  return {
    repeatOrderGoToCar,
    showWhoWinner,
  };
};

export default ConductGame;
