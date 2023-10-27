// 파일명 : message.js
// 설명 : 메시지 모음

import { CAR, RACE } from "../constants/constants.js";

export class Message {
  carInputMessage = `경주 할 자동차의 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : `;
  carInputErrorMessage = `[ERROR] 자동차 이름은 ${CAR.MAX_NAME_LENGTH}자 이하만 가능합니다.`;
  carInputErrorMessage2 = `[ERROR] 자동차 이름은 공백이 될 수 없습니다.`;
  carInputErrorMessage3 = `[ERROR] 자동차 이름은 중복될 수 없습니다.`;
  carInputErrorMessage4 = `[ERROR] 자동차 이름은 ${CAR.MIN_CAR_COUNT}개 이상이어야 합니다.`;
  carInputErrorMessage5 = `[ERROR] 한번에 ${CAR.MAX_CAR_COUNT}대 까지의 자동차만 경주 할 수 있습니다..`;

  raceTryInputMessage = `시도할 횟수는 몇회인가요? : `;
  raceTryInputErrorMessage = `[ERROR] 시도 횟수는 숫자만 가능합니다.`;
  raceTryInputErrorMessage2 = `[ERROR] 시도 횟수는 ${RACE.MIN_TRY_COUNT} 이상이어야 합니다.`;
  raceTryInputErrorMessage3 = `[ERROR] 시도 횟수는 ${RACE.MAX_TRY_COUNT} 이하이어야 합니다.`;
  raceTryInputErrorMessage4 = `[ERROR] 시도할 횟수는 공백이 될 수 없습니다.`;

  raceResultMessage = `실행 결과`;
  raceWinner = `최종 우승자 : `;
}
