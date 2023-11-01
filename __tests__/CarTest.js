import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const Mockfn = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

test("랜덤 값에 따른 차 전진 테스트", async () => {
  const input = ["cat,dog", "1"];
  const random = [4, 3];
  const output = ["cat : -", "dog : "];
  const logSpy = getLogSpy();
  Mockfn(input);
  mockRandoms([...random]);

  const app = new App();
  await app.play();

  output.forEach((element) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(element));
  });
});

test("우승자 출력 테스트", async () => {
  const input = ["baek,jun,won", "1"];
  const random = [5, 6, 2];
  const output = ["최종 우승자 : baek, jun"];
  const logSpy = getLogSpy();
  Mockfn(input);
  mockRandoms([...random]);

  const app = new App();
  await app.play();

  output.forEach((element) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(element));
  });
});
