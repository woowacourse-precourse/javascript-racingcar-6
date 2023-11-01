import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("나의 자동차 게임", () => {
    test("전진-정지2", async() => {
        //given
        const inputs = ["a,b,c,d", "3"];
        const outputs = ["a : ---", "b : --", "c : -", "d : -"];
        const randoms = [8,8,8,8,8,8,1,1,8,1,1,1];
        const logSpy = getLogSpy();
    
        mockQuestions(inputs);
        mockRandoms([...randoms]);
    
        //when
        const app = new App();
        await app.play();
    
        //then
        outputs.forEach(output => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
        })
    })

    test.each([
        [["pobi, nananna"]],
        [["nanananan, jhon"]]
    ])("이름에 대한 예외 처리", async (inputs) => {
        mockQuestions(inputs);
        const app = new App();

        await expect(app.play()).rejects.toThrow("[ERROR]")
    })

    test.each([
        [["pobi, kabi", "noNumber"]],
        [["pobi, jhon", ""]]
    ])("시도횟수에 대한 예외 처리", async (inputs) => {
        mockQuestions(inputs);
        const app = new App();

        await expect(app.play()).rejects.toThrow("[ERROR]")
    })

})

