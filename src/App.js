import { MissionUtils } from '@woowacourse/mission-utils';
import User, {
  inputParticipantCarName,
  validParticipantCarName,
  inputNumberOfAttempts,
  validNumberOfAttempts,
} from './User.js';

class App {
  async play() {
    const inputUserList = await inputParticipantCarName();
    console.log(inputUserList); // TODO 디버깅용
    await validParticipantCarName(inputUserList);
    const userList = new User(inputUserList);
    console.log(userList); // TODO 디버깅용
    const userInput = await inputNumberOfAttempts();
    await validNumberOfAttempts(userInput);
    console.log(userInput); // TODO 디버깅용
  }
}

export default App;
