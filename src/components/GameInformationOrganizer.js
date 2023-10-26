class GameInformationOrganizer {
  constructor(userInputCarsArr, arrForRace) {
    this.userInputCarsArr = userInputCarsArr;
    this.arrForRace = arrForRace;
    this.arrForInformation = [];
  }

  createGameInformationObj() {
    for (let i = 0; i < this.arrForRace.length; i++) {
      const OBJ_PER_TRY = {};
      this.userInputCarsArr.forEach(
        (carName, index) => (OBJ_PER_TRY[carName] = this.arrForRace[i][index])
      );
      this.arrForInformation.push(OBJ_PER_TRY);
    }

    return this.arrForInformation;
  }
}

export default GameInformationOrganizer;
