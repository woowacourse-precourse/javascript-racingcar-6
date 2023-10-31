import { getCarNames, getRoundCount } from '../view/inputView.js';
import { InputValid, RoundValid } from '../models/InputValid.js';

const startGame = async () => {
  let inputName = await getCarNames();
  InputValid(inputName);

  let round = await getRoundCount();
  RoundValid(round);
};

export default startGame;
