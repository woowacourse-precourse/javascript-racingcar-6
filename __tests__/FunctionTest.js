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
        "handleInvalidCarName함수 테스트",
        async (inputs) => {
            // given
            mockQuestions(inputs);

            // when
            const app = new App();
            await expect(() => app.handleInvalidCarName.moving(value)).toThrow(
                "[ERROR] 자동차 이름이 잘못된 형식입니다."
            );
        }
    );

    test.each([``, `숫자`, `1,2`])(
        "handleInvalidNumberOfGames함수 테스트",
        async (inputs) => {
            // given
            mockQuestions(inputs);

            // when
            const app = new App();
            await expect(() =>
                app.handleInvalidNumberOfGames.moving(value)
            ).toThrow("[ERROR] 시도 횟수가 잘못된 형식입니다.");
        }
    );
});
