import { MESSAGE } from "../Constant/MESSAGE";
import { print } from "../Utils/print";

// 우승자 반환
const checkWinner = async (participants, participantsDistance) => {
  const winner = []; // 참가자 및 거리를 저장
  for (let i = 0; i < participants.length; i++) {
    const name = participants[i];
    winner.push([name, participantsDistance[name][1]]);
  }

  // 거리 비교 후 우승자 판단
  const sortedWinner = winner.sort((a, b) => b[1] - a[1]);
  const returnWinner = [];
  const max = sortedWinner[0][1];

  for (let i = 0; i < sortedWinner.length; i++) {
    if (sortedWinner[i][1] < max) break;
    returnWinner.push(sortedWinner[i][0]);
  }
  return returnWinner;
};

// 각 참가자들의 결과 비교 후 우승자를 출력
export const terminateGame = async (participants, participantsDistance) => {
  const winner = await checkWinner(participants, participantsDistance);
  print(`${MESSAGE.END}${winner.join(", ")}`);
};
