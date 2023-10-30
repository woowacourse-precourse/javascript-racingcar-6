class GameData {
  constructor() {
    this.racecarNames = [];
    this.roofNum = 0;
  }

  getRacecarNames() {
    return this.racecarNames;
  }

  setRacecarNames(racecarNames) {
    this.racecarNames = racecarNames;
  }

  getRoofNum() {
    return this.roofNum;
  }

  setRoofNum(roofNum) {
    this.roofNum = roofNum;
  }
}

export { GameData };
