import App from "../src/App.js";
import { Random, Console } from "@woowacourse/mission-utils";

const mockQuestions = (input) => {
    Console.readLineAsync = jest.fn();

    Console.readLineAsync.mockImplementation(() => {
        return Promise.resolve(input);
    });
};

describe("기능 테스트", () => {
    test("자동차이름은 쉼표 기준으로 배열로 저장", async () => {
        const input = `치이카와, 우사기, 하치와레`;
        const result = input.split(",");

        mockQuestions(input);

        const app = new App();

        await expect(await app.createCarNameArr()).toEqual(result);
    });

    test("시도횟수 숫자형으로 바꿔서 저장", async () => {
        const input = "1";
        const result = 1;

        mockQuestions(input);

        const app = new App();

        await expect(await app.getNumberOfGames()).toEqual(result);
    });

    test.each([``, `치이카와 우사기 하치와레`, `이름엄청길다,이름,이`,`치이카와,`])(
        "잘못된 자동차 이름 에러 처리 테스트",
        async (value) => {
            const app = new App();
            const valueArr = value.split(",");

            await expect(() => app.checkCarFormat(value, valueArr)).toThrow(
                "[ERROR] 자동차 이름이 잘못된 형식입니다."
            );
        }
    );

    test.each([``, `0`, `숫자`, `1,2`])(
        "잘못된 시도횟수 에러 처리 테스트",
        async (value) => {
            const app = new App();
            const numberOfGames = value / 1;

            await expect(() =>
                app.checkNumberOfGamesFormat(numberOfGames)
            ).toThrow("[ERROR] 시도 횟수가 잘못된 형식입니다.");
        }
    );

    test("자동차 점수계산기 테스트", async () => {
        const input = Array(4).fill("");
        const result = ["-", "-", "-", "-"];

        jest.spyOn(Random, "pickNumberInRange").mockImplementation(() => 4);

        const app = new App();

        await expect(app.calculateAndStoreScore(input)).toEqual(result);
    });

    test("라운드별 결과 테스트", async () => {
        const carStates = ["-", "--", ""];
        const carNameArr = ["치이카와", "하치와레", "우사기"];
        const result = ["치이카와 : -", "하치와레 : --", "우사기 : "].join(
            "\n"
        );

        const app = new App();

        await expect(app.createRoundResult(carNameArr, carStates)).toEqual(
            result
        );
    });

    test("게임 승자 인덱스 출력 테스트", async () => {
        const carStates = ["", "-"];
        const result = [1];

        const app = new App();

        await expect(app.determineWinner(carStates)).toEqual(
            result
        );
    });
});
