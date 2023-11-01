import App from "../src/App.js";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/const/messages.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const app = new App();

test("가장 많이 이동한 자동차들 이름 출력", () => {
  const arg = {
    bin: 4,
    min: 3,
    jay: 4
  };
  const output = `${MESSAGES.finalWinner}bin, jay`;
  const logSpy = getLogSpy();

  app.judgeWinner(arg);

  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
});
