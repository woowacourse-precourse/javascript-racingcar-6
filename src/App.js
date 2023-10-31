import { inputParticipantCarName } from './User.js';

class App {
  async play() {
    const userList = await inputParticipantCarName();
    console.log(userList);
  }
}

export default App;
