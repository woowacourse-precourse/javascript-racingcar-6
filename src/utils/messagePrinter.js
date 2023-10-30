import * as MissionUtils from "@woowacourse/mission-utils";

export const messagePrinter = {
  inputPrint: (text) => MissionUtils.Console.readLineAsync(text),
  outputPrint: (text) => MissionUtils.Console.print(text),
  errorPrint: (text) => {
    const prefix = '[ERROR]'
    throw new Error(`${prefix} ${text}`)
  },
};