import { MissionUtils } from '@woowacourse/mission-utils';
import User, {
  inputParticipantCarName,
  validParticipantCarName,
} from './User.js';

class App {
  async play() {
    const inputUserList = await inputParticipantCarName();
    console.log(inputUserList); // TODO 디버깅용
    await validParticipantCarName(inputUserList);
    const userList = new User(inputUserList);
    console.log(userList);
  }
}

export default App;
