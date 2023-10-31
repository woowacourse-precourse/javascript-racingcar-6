import { CARNAME_REQUEST_MESSAGE } from '../Utils/Define';
import InputView from '../view/InputView';

const playGame = async () => {
  const carsName = await InputView(CARNAME_REQUEST_MESSAGE);
  console.log(carsName);
};
export default playGame;
