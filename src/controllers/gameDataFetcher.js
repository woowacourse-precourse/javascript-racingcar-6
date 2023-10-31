import { GameOutputMsg } from "../constants/gameConstants";
import { Validator } from "../validators/validator";
import { Converter } from "../utils/converter.js";
import { Prompt } from "../prompt/prompt.js";

export class DataFetcher {
  static async getCars() {
    const USER_INPUT = await Prompt.getString(GameOutputMsg.gameStartMessage); // 사용자로부터 자동차 이름 입력 받기
    const CAR_NAME_LIST = USER_INPUT.split(","); // 입력값을 , 기준으로 분리
    Validator.validateString(CAR_NAME_LIST); // 이름 유효성 검사
    const CARS = Converter.createCars(CAR_NAME_LIST); // 이름을 기반으로 자동차 객체 생성
    return CARS;
  }

  static async getRounds() {
    const RACE_ROUND = await Prompt.getNumber(GameOutputMsg.roundsInputMessage); // 레이스 라운드 숫자 입력 받기
    Validator.validateNumber(RACE_ROUND); // 라운드 수 유효성 검사
    return RACE_ROUND;
  }
}
