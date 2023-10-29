import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs;
        return Promise.resolve(input);
    });
};

describe("기능 테스트", () => {
    test("createCarNameArr함수 테스트", async () => {
        const inputs = `치이카와, 우사기, 하치와레`;
        const result = inputs.split(",");
        // given
        mockQuestions(inputs);

        // when
        const app = new App();
        await expect(app.createCarNameArr()).toEqual(result);
    });

    test("getNumberOfGames함수 테스트", async () => {
        const inputs = "1";
        const result = 1;
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        await expect(app.getNumberOfGames()).toContain(result);
    });

    test.each([``, `치이카와 우사기 하치와레`, `이름엄청길다,이름,이`])(
        "checkCarFormat 함수 테스트",
        async (value) => {
            const app = new App();
            const valueArr = value.split(",");
            await expect(() => app.checkCarFormat(value, valueArr)).toThrow(
                "[ERROR] 자동차 이름이 잘못된 형식입니다."
            );
        }
    );

    test.each([``, `0`, `숫자`, `1,2`])(
        "checkNumberOfGamesFormat함수 테스트",
        async (value) => {
            // when
            const app = new App();
            await expect(() =>
                app.checkNumberOfGamesFormat.moving(value)
            ).toThrow("[ERROR] 시도 횟수가 잘못된 형식입니다.");
        }
    );
});
