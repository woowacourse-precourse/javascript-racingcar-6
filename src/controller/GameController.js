import { getCarNames, getRoundCount } from '../view/inputView.js';
import { InputValid, RoundValid } from '../models/InputValid.js';
import CarsList from '../models/CarList.js';

const startGame = async () => {
  let inputName = await getCarNames();
  InputValid(inputName);
  CarsList(inputName);

  let round = await getRoundCount();
  RoundValid(round);
};

export default startGame;
