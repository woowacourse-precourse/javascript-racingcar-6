import { Console, MissionUtils } from "@woowacourse/mission-utils";

// 2. 게임 진행
const gameProgress = async (players, maxNum) => {
  // 2-1. 실행 결과 문구 출력
  await Console.print("\n실행 결과");
  // 2-5. 실행 횟수만큼 출력
  let result = players;
  for (let i = 0; i < maxNum; i++) {
    const randoms = getRandom(players);
    const moves = await getMove(randoms);
    result = await printResult(moves);
  }
  return result;
};

// 2-2. 자동차 별 랜덤 숫자 생성
const getRandom = (players) => {
  players.map((player) => {
    player.random = MissionUtils.Random.pickNumberInRange(0, 9);
  });
  return players;
};

// 2-3. 자동차 별 랜덤 숫자에 따른 전진 여부 파악
const getMove = async (randoms) => {
  randoms.map((player) => {
    if (player.random >= 4) {
      player.move += "-";
    }
  });
  return randoms;
};

// 2-4. 각 차수별 실행 결과 출력
const printResult = async (moves) => {
  moves.map((player) => {
    Console.print(`${player.name} : ${player.move}`);
  });
  Console.print("\n");
  return moves;
};

export { gameProgress, getRandom, getMove, printResult };
