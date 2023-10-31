import RacingGameController from './controller/RacingGameController';

export default class App {
  async play() {
    const racingGame = new RacingGameController();
    await racingGame.start();
  }
}
