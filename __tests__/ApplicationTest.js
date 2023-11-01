import App from "../src/App.js";
import {MissionUtils} from "@woowacourse/mission-utils";

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

describe("자동차 경주 게임", () => {
    test("전진-정지", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni", "1"];
        const outputs = ["pobi : -"];
        const randoms = [MOVING_FORWARD, STOP];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([...randoms]);

        // when
        const app = new App();
        await app.play();

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
        });
    });

    test.each([
        [["pobi,javaji"]],
        [["pobi,eastjun"]]
    ])("이름에 대한 예외 처리", async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });

    test.each([
        [["hype,soo,lim"]],
        [["hype ,  soo, lim"]]
    ])("입력 양식에 맞춰 자동차 이름 배열 저장", async (inputs) => {

        const input = ["hype,soo,lim"];

        //given
        mockQuestions(inputs);

        //when
        const app = new App();
        const result = await app.getCarsName();

        //then
        expect(result).toEqual(["hype", "soo", "lim"])
    });

    test("출력 형식 확인", async () => {


        const CARS = ["pobi", "woni", "jun"]
        const carGoCNT = [4, 1, 3]
        const logSpy = getLogSpy();
        const app = new App();
        app.printEachGameState(CARS, carGoCNT)
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : ----"));
    });

    test("결과 출력 형식 확인", async () => {


        const CARS = ["pobi", "woni", "jun"]
        const carGoCNT = [4, 1, 4]
        const logSpy = getLogSpy();
        const app = new App();
        app.printGameResult(carGoCNT, CARS);

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : pobi, jun"));
    });

});
