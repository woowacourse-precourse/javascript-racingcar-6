import { MESSAGE } from "../Constant/constant";
import { print } from "../Utils/Utils";

/**
 * 우승자 확인 기능
 * @param {*} participants : 참가자 명단
 * @param {*} participantsDistance : 최종 진행 거리 객체
 * return : 우승자를 배열로 반환
 */
const checkWinner = async (participants, participantsDistance) => {
  const winner = [];
  for (let i = 0; i < participants.length; i++) {
    const name = participants[i];
    winner.push([name, participantsDistance[name][1]]);
  }

  const sortedWinner = winner.sort((a, b) => b[1] - a[1]);
  const returnWinner = [];
  const max = sortedWinner[0][1];
  for (let i = 0; i < sortedWinner.length; i++) {
    if (sortedWinner[i][1] < max) {
      break;
    }
    returnWinner.push(sortedWinner[i][0]);
  }
  return returnWinner;
};

/**
 * 각 참가자들의 결과를 비교 후 우승자를 출력하며 게임을 종료
 * @param {*} participants : 참가자 명단
 * @param {*} participantsDistance : 최종 진행 거리 객체
 */
export const terminateGame = async (participants, participantsDistance) => {
  const winner = await checkWinner(participants, participantsDistance);
  print(`${MESSAGE.END}${winner.join(", ")}`);
};
