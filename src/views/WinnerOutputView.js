import { Console } from "@woowacourse/mission-utils";

const WinnerOutputView = (race) => {
  Console.print(`최종 우승자 : ${race.getWinner()}`);
};

export default WinnerOutputView;
