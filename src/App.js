import User from '../cargame/User.js';

class App {
  async play() {
    const user = new User();

    await user.getCarNames();

    console.log('게임을 시작합니다. 경주할 자동차 이름:', user.carNames);
  }
}

export default App;
