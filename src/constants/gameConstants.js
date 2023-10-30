class Setting {
  constructor() {
    this.minRaceLimit = 1;
    this.maxRaceLimit = 20;
    this.nameRegex = /^[a-zA-Z0-9-_]+$/;
    this.minValue = 3;
    this.maxNameLength = 5;
  }
}

class OutputMsg {
  constructor() {
    this.gameStartMessage =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
    this.roundsInputMessage = "시도할 횟수는 몇 회인가요?\n";
    this.raceStartMessage = "실행 결과";
    this.winnerPrefix = "최종 우승자 : ";
  }
}

class ErrorMsg {
  constructor() {
    this.numberInputError = "[ERROR] 숫자만 입력해주세요";
    this.numberOutOfRangeError = "[ERROR] 1이상 20이하의 숫자만 입력해주세요";
    this.carNameFormatError = "[ERROR] 차량의 이름이 잘못 된 형식입니다!";
    this.uniqueCarNameError = "[ERROR] 차량의 이름을 서로 다르게 입력해주세요";
    this.maxLengthNameError = "[ERROR]차량의 이름은 최대 5자 입니다";
    this.nameFormatError = "[ERROR]차량의 이름이 잘못 된 형식입니다!";
    this.sameCarNameError = "[ERROR]차량의 이름을 서로 다르게 입력해주세요";
  }
}

export const GameSetting = Object.freeze(new Setting());
export const GameOutputMsg = Object.freeze(new OutputMsg());
export const GameErrorMsg = Object.freeze(new ErrorMsg());
