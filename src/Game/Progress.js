import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, NUMBER } from "../Constant/constant";
import { print } from "../Utils/Utils";
import { checkRandomNumber } from "../Validates";

const { Random } = MissionUtils;
const participantsDistance = {};

/**
 * 참가자의 진행 여부를 판단하기위해 현재 참가자 순서를 보내줌
 * @param {*} participants : 참가자 명단
 */
const changeParticipantsData = async (participants) => {
  let index = 0;
  while (index < participants.length) {
    await changeDistance(participants, index);
    index++;
  }
};

/**
 * 각 참가자 진행여부를 판단하고 수정, 진행거리를 숫자로 보관해 우승자 비교시 사용
 * @param {*} participants : 참가자 명단
 * @param {*} index : 순서
 */
const changeDistance = async (participants, index) => {
  const randomNumber = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
  await checkRandomNumber(randomNumber);

  const name = participants[index];
  if (randomNumber >= NUMBER.STANDARD) {
    participantsDistance[name] = participantsDistance[name] ? [participantsDistance[name][0] + '-', participantsDistance[name][1] + 1] : ['-', 1];
  } else {
    participantsDistance[name] = participantsDistance[name] ? [...participantsDistance[name]] : ['', 0];
  }
};

/**
 * 매 게임 진행마다 참가자 진행 결과를 출력
 * @param {*} participants : 참가자 명단
 */
const printResult = async (participants) => {
  for (let i = 0; i < participants.length; i++) {
    const result = `${participants[i]} : ${
      participantsDistance[participants[i]][0]
    }`;
    print(result);
  }
};

/**
 * 실제 게임 진행 부분
 * @param {*} attempt : 총 실행 횟수
 * @param {*} participants : 참가자 명단
 * @returns 최종 참가자 거리를 반환
 */
export const progressGame = async (attempt, participants) => {
  print(MESSAGE.RESULT);
  for (let i = 0; i < attempt; i++) {
    await changeParticipantsData(participants); // 각 참가자들 진행 여부 판단
    await printResult(participants); // 출력
  }

  return participantsDistance;
};
