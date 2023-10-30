import User from './User.js';

class App {
  async play() {
    const user = new User();
    const userList = await user.inputParticipantCarName();
    console.log(userList);
  }
}

export default App;
