import { Maximum, Minimum } from "./Standard.js";

const Messages = Object.freeze({
  GET_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  GET_TRY_NUMBER: "시도할 횟수는 몇 회인가요?\n",
  RACE_RESULT: "실행 결과\n",
  RACE_MARK: "-",
  WINNER: "최종 우승자 : ",
  ERROR: Object.freeze({
    EXCEED_CAR_NAME_LETTER: `[ERROR] 자동차 이름은 ${Maximum.CAR_NAME_LETTER}자 이하로 작성해주세요`,
    SHORT_CAR_NAME_LETTER: `[ERROR] 자동차 이름은 ${Minimum.CAR_NAME_LETTER}자 이상으로 작성해주세요`,
    EXEED_CAR_NAME_NUMBER: `[ERROR] 자동차는 최대 ${Maximum.CAR_NAME_NUMBER}대까지 입력할 수 있습니다`,
    SHORT_CAR_NAME_NUMBER: `[ERROR] 자동차는 최소 ${Minimum.CAR_NAME_NUMBER}대 이상 입력해주세요`,
    DUPLICATION_CAR_NAME: `[ERROR] 자동차 이름을 중복되지 않게 작성해주세요`,
    WRONG_TRY_NUMBER: `[ERROR] 시도 횟수는 숫자로만 입력해주세요`,
    EXCEED_TRY_NUMBER: `[ERROR] 시도 횟수는 최대 ${Maximum.TRY_NUMBER}회까지 입력할 수 있습니다`,
    SHORT_TRY_NUMBER: `[ERROR] 시도 횟수는 최소 ${Minimum.TRY_NUMBER}회 이상 입력해주세요`,
  }),
});

export default Messages;
