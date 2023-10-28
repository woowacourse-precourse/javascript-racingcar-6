import { RacingGameState } from "../../constanst/game.js";

const ErrorMessage = {
  basicErrorMessage: (msg) => `[ERROR] ${msg}`,
  incorrectFormatErrorMessage: () => `잘못된 형식입니다.`,
  incorrectParameterErrorMessage: () => `잘못된 매개변수입니다.`,
  outOfRangeErrorMessage: (num = RacingGameState.MAX_NAME_LENGTH) =>
    `${num}자 이하로 입력해 주세요.`,
};

const RacingGameMessage = {
  nameTitle: () => `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  countTitle: () => `시도할 횟수는 몇 회인가요?\n`,
  resultTitle: () => `\n실행 결과`,
  winner: (msg) => `최종 우승자 : ${msg}`,
};

export { ErrorMessage, RacingGameMessage };
