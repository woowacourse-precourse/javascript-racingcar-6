import { Console } from '@woowacourse/mission-utils';
import User, {
  inputParticipantCarName,
  validParticipantCarName,
  inputNumberOfAttempts,
  validNumberOfAttempts,
} from './User.js';
import { TEXT } from './constants.js';

class App {
  async play() {
    const inputUserList = await inputParticipantCarName();
    await validParticipantCarName(inputUserList);
    const userList = new User(inputUserList);
    const userInput = await inputNumberOfAttempts();
    await validNumberOfAttempts(userInput);
    Console.print(TEXT.RESULT);
    userList.playRacingGame(userInput);
    await userList.printWinner();
  }
}

export default App;
