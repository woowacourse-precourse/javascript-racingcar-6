import { getCarNames, getRoundCount } from '../view/inputView';
import { InputValid, RoundValid } from '../validation/InputValid';
import { carsList } from '../models/CarsList';

const startGame = async () => {
  const inputName = await getCarNames();
  const name = InputValid(inputName);

  const round = await getRoundCount();
  RoundValid(round);

  carsList(name, round);
};

export default startGame;
