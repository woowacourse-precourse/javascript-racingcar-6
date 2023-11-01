import GameSetting from "./gameSetting";

class App {
  constructor() {
    this.playersData = [];
    this.roundNumber = 0;
    this.winners = [];
  }
  async play() {}

  async initGmae(){
    const players = await GameSetting.getCarsName();
    this.roundNumber = await GameSetting.getRound();
    this.playersData = await GameSetting.getPlayersData(players);
  }
}

export default App;
