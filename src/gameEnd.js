import { Console } from "@woowacourse/mission-utils";

// 3. 게임 진행
const gameEnd = async (result) => {
  const winner = await getWinner(result);
  await printWinner(winner);
};

const getWinner = async (result) => {
  // 3-1. 전진 횟수에 따른 우승자 결정
  let winner = [result[0].name];
  let maxDistance = result[0].move.length;

  for (let i = 1; i < result.length; i++) {
    // 단독 우승인 경우
    if (maxDistance < result[i].move.length) {
      winner = [result[i].name];
      maxDistance = result[i].move.length;
    }
    // 공동 우승인 경우
    else if (maxDistance === result[i].move.length) {
      winner.push(result[i].name);
    }
  }
  return winner;
};

const printWinner = async (winner) => {
  // 3-2. 우승자 안내 문구 출력
  // 단독 우승인 경우
  if (winner.length === 1) {
    Console.print(`최종 우승자 : ${winner[0]}`);
  }
  // 공동 우승인 경우
  else Console.print(`최종 우승자 : ${winner.join(", ")}`);
};

export { gameEnd, getWinner, printWinner };
