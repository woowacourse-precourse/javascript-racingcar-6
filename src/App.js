import GameManage from './mvc/controller/game_manage.js';

class App {
  async play() {
    const RACING_CAR_GAME = new GameManage();
    await RACING_CAR_GAME.inputRacingCar();
  }
}

export default App;
