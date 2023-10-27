import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../common/index";

const printResult = (winners) =>
  MissionUtils.Console.print(`${TEXT.WINNER_MESSAGE} : ${winners.join(", ")}`);

export default printResult;
