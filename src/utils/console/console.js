import { MissionUtils } from "@woowacourse/mission-utils";

const Console = {
  print: (msg) => MissionUtils.Console.print(msg),
  readLineAsync: async (msg) => MissionUtils.Console.readLineAsync(msg),
};

export { Console };
