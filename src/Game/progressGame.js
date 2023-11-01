import { MissionUtils } from "@woowacourse/mission-utils";
import { NUMBER } from "../Constant/NUMBER";
import { MESSAGE } from "../Constant/MESSAGE";
import { print } from "../Utils/print";
import { verifyRandomNumber } from "../Verify/verifyRandomNumber";

const { Random } = MissionUtils;
const participantsDistance = {};

const changeDistance = async (participants) => {
  let index = 0;

  while (index < participants.length) {
    const randomNumber = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
    await verifyRandomNumber(randomNumber);
  
    const name = participants[index];
    if (randomNumber >= NUMBER.STANDARD) {
      participantsDistance[name] = participantsDistance[name] ? [participantsDistance[name][0] + '-', participantsDistance[name][1] + 1] : ['-', 1];
    } else {
      participantsDistance[name] = participantsDistance[name] ? [...participantsDistance[name]] : ['', 0];
    }
    index++;
  }
};

const printResult = async (participants) => {
  for (let i = 0; i < participants.length; i++) {
    const result = `${participants[i]} : ${participantsDistance[participants[i]][0]}`;
    print(result);
  }
};

export const progressGame = async (attempt, participants) => {
  print(MESSAGE.RESULT);
  for (let i = 0; i < attempt; i++) {
    await changeDistance(participants); // 각 참가자들 진행 여부 판단
    await printResult(participants); // 출력
  }

  return participantsDistance;
};
