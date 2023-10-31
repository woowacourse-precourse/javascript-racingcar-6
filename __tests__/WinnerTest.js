import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../src/view/OutputView.js";
import Cars from "../src/app/Cars.js";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("최종 우승자", () => {
    test("단독 우승자", async () => {
        const names = ["poby", "seoro"];
        const distances = [1, 2];
        const outputs = ["최종 우승자 : seoro"];
        const logSpy = getLogSpy();

        // when
        const cars = new Cars(names);
        cars.distances = distances;
        const winners = cars.getWinners()
		OutputView.printWinners(winners);

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(output);
        });
    })

    test("공동 우승자", async () => {
        const names = ["poby", "seoro"];
        const distances = [2, 2];
        const outputs = ["최종 우승자 : poby, seoro"];
        const logSpy = getLogSpy();

        // when
        const cars = new Cars(names);
        cars.distances = distances;
        const winners = cars.getWinners()
		OutputView.printWinners(winners);

        // then
        outputs.forEach((output) => {
            expect(logSpy).toHaveBeenCalledWith(output);
        });
    })
});