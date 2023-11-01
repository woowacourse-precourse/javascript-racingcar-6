import Car from '../model/Car.js';
import DataProcess from '../view/DataProcess.js';
import InputView from '../view/InputView.js';
import ValidatingTheValue from '../view/ValidatingTheValue.js';

const ConductGame = async () => {
  const carNames = ValidatingTheValue.checkCarNames(await InputView.inputCarName());
  const cars = new Set(carNames.map((carName) => new Car(carName)));
  const repeatCount = ValidatingTheValue.checkRepeatCount(await InputView.inputRepeatCount());
};

export default ConductGame;
