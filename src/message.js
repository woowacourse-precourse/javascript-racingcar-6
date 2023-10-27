class Message {
  carInputMessage =
    "경주 할 자동차의 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) : ";
  carInputErrorMessage = "[ERROR] 자동차 이름은 10자 이하만 가능합니다.";
  carInputErrorMessage2 = "[ERROR] 자동차 이름은 공백이 될 수 없습니다.";
  carInputErrorMessage3 = "[ERROR] 자동차 이름은 중복될 수 없습니다.";
  carInputErrorMessage4 = "[ERROR] 자동차 이름은 2개 이상이어야 합니다.";
  carInputErrorMessage5 =
    "[ERROR] 한번에 10대 까지의 자동차만 경주 할 수 있습니다..";

  raceTryInputMessage = "시도할 횟수는 몇회인가요? : ";
  raceTryInputErrorMessage = "[ERROR] 시도 횟수는 숫자만 가능합니다.";
  raceTryInputErrorMessage2 = "[ERROR] 시도 횟수는 1 이상이어야 합니다.";
  raceTryInputErrorMessage3 = "[ERROR] 시도 횟수는 100 이하이어야 합니다.";
}

export default { Message };
