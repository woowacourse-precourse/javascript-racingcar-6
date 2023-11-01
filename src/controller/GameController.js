import { getCarNames, getRoundCount } from '../view/inputView.js';
import { InputValid, RoundValid } from '../validation/InputValid.js';
import { carsList } from '../models/CarsList.js';

const startGame = async () => {
  const inputName = await getCarNames();
  const name = InputValid(inputName);

  const round = await getRoundCount();
  RoundValid(round);

  carsList(name, round);
};

export default startGame;
