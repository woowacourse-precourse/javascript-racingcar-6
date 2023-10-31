import { MissionUtils } from '@woowacourse/mission-utils';
import { inputParticipantCarName, validParticipantCarName } from './User.js';

class App {
  async play() {
    const userList = await inputParticipantCarName();
    console.log(userList); // TODO 디버깅용
    await validParticipantCarName(userList);
  }
}

export default App;
