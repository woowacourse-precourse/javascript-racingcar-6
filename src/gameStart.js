import { Console } from "@woowacourse/mission-utils";

// 1. 자동차 이름 (게임 진행자)
const getCarName = async () => {
  // 1-1. 자동차 이름 입력 요구 문구 출력
  Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );

  // 1-2. 자동차 이름 입력 받기
  const carName = await Console.readLineAsync("");
  const names = nameValidation(carName);

  // 1-4. 게임 진행자에 대한 배열 생성
  const players = [];
  names.forEach((name) => {
    players.push({ name: name, random: 0, move: "" });
  });
  return players;
};

// 1-3. 자동차 이름 검증하기
const nameValidation = (name) => {
  // 쉼표로 구분하지 않은 경우
  if (!name.includes(",")) {
    throw new Error("[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분해 주세요.");
  }
  // 쉼표로 구분한 경우
  const names = name.split(",").map((name) => name.trim());
  names.map((name) => {
    // 이름이 1자 이하인 경우
    if (name.length < 1) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상으로 입력해 주세요.");
    }
    // 이름이 5자 이상인 경우
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해 주세요.");
    }
  });
  return names;
};

// 2. 시도할 횟수
