import { MissionUtils } from "@woowacourse/mission-utils";

const playerRegistration = async (answer) => {
  const playerList = await MissionUtils.Console.readLineAsync(answer);
  const playerArray = playerList.split(",");
  let player = [];
  for (let i = 0; i < playerArray.length; i++) {
    if (playerArray[i].length <= 5) {
      player.push(playerArray[i]);
    } else {
      throw new Error("[ERROR] 입력은 최대 5글자까지");
    }
  }
  return player;
};

export default playerRegistration;
