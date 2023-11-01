import { MissionUtils } from "@woowacourse/mission-utils";

async function calcFinalResult(carArray) {
  let resultNum = 0
  carArray.forEach(e => {
    resultNum = Math.max(resultNum, e[1])
  });

  let resultStr = ''
  carArray.forEach(e => {
    if (e[1] === resultNum) {
      resultStr += (e[0] + ', ')
    }
  });

  MissionUtils.Console.print(`최종 우승자 : ${resultStr.slice(0, -2)}`);
}

export default calcFinalResult