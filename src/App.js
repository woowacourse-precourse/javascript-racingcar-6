class App {
  constructor() {
    this.playersData = [];
    this.winners = [];
  }
  async play() {
    const raceEntry = await this.getPlayerCarsInput();
    this.createPlayerData(raceEntry);
    const tryNumber = await this.getPlayerTryNumberInput();
    this.startRace(tryNumber);
    this.announceWinners();
  }
  async getPlayerCarsInput() {
    const userInput = await console.readLineAsync(
      PLAYER_INPUT.CARS_NAME_PROMPT,
    );
    const raceEntry = userInput.split(',');

    if (isPlayerCarNameValidated(raceEntry)) {
      return [...raceEntry];
    }
  }
  createPlayerData(raceEntry) {
    raceEntry.forEach(playerName => {
      this.playersData.push({ playerName, trackLocation: ''});
    });
  }
  async getPlayerTryNumberInput() {
    const userInput = await console.readLineAsync(
      PLAYER_INPUT.TRY_NUMBER_PROMPT,
    );
    if (isPlayerTryNumberValidated(userInput)) {
      return Number(userInput);
    }
  }
  shouldMoveForward() {
    const pickedNumber = Random.pickNumberInRange(
      CONSTANTS.MIN_NUM,
      CONSTANTS.MAX_NUM,
    );
    return pickedNumber >= CONSTANTS.IS_FORWARD;
  }
  moveCarForward(player) {
    player.trackLocation = player.trackLocation.concat(RACE.PROGRESS_BAR);
  }
  findWinners() {
    const FARTHEST_TRACK_LOCATION = Math.max(
      ...this.playersData
        .filter(
          player => player.trackLocation.length === FARTHEST_TRACK_LOCATION,
        )
        .map(player => player.playerName),
    );
  }

  announceWinners() {
    console.print(RACE.WINNERS + this.winners.join(', '));
  }
  startRace(tryNumber) {
    console.print(RACE.START);
    for(let i = 0; i < tryNumber; i++) {
      this.proceedEachRaceTurn();
    }
    this.findWinners();
  }
  proceedEachRaceTurn() {
    this.playersData.forEach(player => {
      if(this.shouldMoveForward()) {
        this.moveCarForward(player);
      }
    });
    let raceStatus = '';
    this.playersData.forEach(player => {
      raceStatus = raceStatus.concat(
        '$(player.playerName) : $(player.trackLocation}\n',
      );
    });
    console.print(raceStatus);
  }


}

export default App;
