import { MissionUtils } from "@woowacourse/mission-utils";

const Console = {
  print: (msg) => {
    MissionUtils.Console.print(msg);
  },

  readLineAsync: async () => {
    return MissionUtils.Console.readLineAsync();
  },
};

export { Console };
