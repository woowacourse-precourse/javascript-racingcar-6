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
