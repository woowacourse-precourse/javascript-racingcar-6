import composeResult from "./composeResult.js";
import initGame from "./initGame.js";
import { messages } from "../output/messages.js";
import { Console, Random } from "@woowacourse/mission-utils";

export default async function playGame() {
  // 초기 설정
  const [carScores, totalRaceCount] = await initGame();
  
  // 게임 진행
  Console.print(messages.EACH_RACE_RESULT);
  for (let i = 0; i < totalRaceCount; i++) {
    playOneRace(carScores);
  }

  // 결과 출력
  const resultMessage = await composeResult(carScores);
  Console.print(resultMessage);
};

const isRunOrStop = (carScore) => {
  const randomNumber = Random.pickNumberInRange(0,9);

  if (randomNumber >= 4) {
    return carScore + 1;
  }
};

const playOneRace = (carScores) => {
  // 1게임 점수 계산
  carScores.forEach((car) => {
    car.score = isRunOrStop(car.score);
  });

  // 진행 사항 출력
  carScores.forEach((car) => {
    Console.print(`${ car.name } : ${ messages.HYPHEN.repeat(car.score) }`);
  })
};
