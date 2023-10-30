import { getCarName } from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils; 

describe("자동차 경주 기능 테스트", () => {
    test("자동차 이름 입력 받기", async () => {
        const input = "poni,woni,jun";
        const expectresult = ["poni", "woni", "jun"];
  
        Console.readLineAsync = jest.fn().mockResolvedValue(input);

        const result = await getCarName();

        expect(result).toEqual(expectresult);
    });
});
