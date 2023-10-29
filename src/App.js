import User from "./User.js";

class App {
  async play() {
    const user = new User();

    try {
      await user.inputPlayersName();
    } catch (error) {
      console.error(error.message);
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }  

    user.inputMoveNum();
  }
}

export default App;
