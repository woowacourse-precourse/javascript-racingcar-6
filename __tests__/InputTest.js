import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { getCarNames, getRoundCount } from '../src/UserInput.js';


const mockReadLineAsync = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

describe("자동차 이름 입력 테스트", () => {
    test("사용자 입력", async () => {
        const inputs = ["kim,rang,bada"];
        mockReadLineAsync(inputs);
        const app = new App();
        const result = await getCarNames();
        expect(result).toContainEqual("kim", "rang", "bada");
    });

    test("사용자 입력 예외 처리", async () => {
        const inputs = ["Honggildong"];

        mockReadLineAsync(inputs);

        await expect(getCarNames()).rejects.toThrow("[ERROR]");
    });
});


describe("게임 횟수 입력 테스트", () => {
    test("시도할 횟수 입력 받고 반환", async () => {
        const inputs = ['1'];
        MissionUtils.Console.readLineAsync = jest.fn();
        MissionUtils.Console.readLineAsync.mockResolvedValue(
            Promise.resolve(inputs)
        );
        const app = new App();
        const result = await getRoundCount();
        expect(result).toBe(1);
    });
  
    test("사용자 입력 예외 처리", async () => {
        const inputs = ["aoi"];
        MissionUtils.Console.readLineAsync = jest.fn();
        MissionUtils.Console.readLineAsync.mockResolvedValue(
            Promise.resolve(inputs)
        );
        const app = new App();
        expect(getRoundCount()).rejects.toThrow("[ERROR]");
    });
});