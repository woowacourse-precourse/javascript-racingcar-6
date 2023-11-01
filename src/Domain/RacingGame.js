import {
  CARNAME_REQUEST_MESSAGE,
  COUNT_REQUEST_MESSAGE,
  NUMBER_MAX,
  NUMBER_MIN,
  MOVE_FORWARD,
} from '../Utils/Define';
import InputView from '../view/InputView';

const playGame = async () => {
  const carsName = await InputView(CARNAME_REQUEST_MESSAGE);
  const gameRound = await InputView(COUNT_REQUEST_MESSAGE);
  console.log(carsName, '++', gameRound);
};

const createRandomNumber = () => {
  const createRandomNumber = Random.pickNumberInRange(NUMBER_MIN, NUMBER_MAX);
};

const canMoveForward = (randomNumber) => {
  if (randomNumber >= MOVE_FORWARD) {
  }
};

export default { playGame, createRandomNumber };
