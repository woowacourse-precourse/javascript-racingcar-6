import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";
import continueOrEnd from "../src/Game/ContinueOrEnd";
import message from "../src/Message";
import loserResult from "../src/Game/LoserResult";
import gameSetting from "../src/Game/GameSetting";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
};
const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};  

describe("함수 테스트", () => {
    const app = new App();
    const logSpy = getLogSpy();
    test("ContinueOrEnd 함수로 게임 진행 여부 결정", async () => {
        const inputs = "2";
        const outputs = [message.game.END_MESSAGE];
        
        await continueOrEnd(inputs, app);
        outputs.forEach((inputs,app) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(inputs,app));
        })
        // expect(result).toContain(message.game.END_MESSAGE);
    });
    test.each([
        [["a"]],
        [["b"]]
        ])("시도횟수로 입력된 값이 숫자인지 여부 테스트", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app2 = new App();

        // then
        await expect(app2.play()).rejects.toThrow("[ERROR]");
    });
    test("탈락자 명단 확인 테스트 ", async () => {
        const winnerInput = ['a','b'];
        const loserInput = ['a','b','c','d','e','f'];
        const outputs = ["c","d","e","f"];

        expect(await loserResult(winnerInput, loserInput)).toEqual(outputs);
    });
    test("동명이인 참가자 구분 테스트", async () => {
        const attendList = "lee,lee,kim,lee,kim,han";
        const duplicateList = [];
        const outputs = [["lee(0)",0],["lee(1)",0],["lee(2)",0],["kim(0)",0],["kim(1)",0],["han",0]];
        expect(await gameSetting(attendList, duplicateList)).toStrictEqual(outputs);
    })
})