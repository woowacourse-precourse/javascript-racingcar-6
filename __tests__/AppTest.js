import { getCarName,getRacingNumber,goRacing,printDistance,moveForward,printWinner } from "../src/App.js";
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

    test("시도 횟수 입력 받기", async () => {
        const input = "5";
        const expectresult = "5";
  
        Console.readLineAsync = jest.fn().mockResolvedValue(input);

        const result = await getRacingNumber();

        expect(result).toEqual(expectresult);
    });

    test("게임 실행", async () => {
        const CarName = ["poni","woni","jun"];
        const RacingNumber = "3";
        const expectresult = [3,3,3]

        const result = await goRacing(CarName,RacingNumber);

        for (let i = 0; i < result.length; i++) {
            expect(result[i]).toBeLessThanOrEqual(expectresult[i]);
        }
    });

    test("우승자 출력", async () => {
        const CarName = ["poni","woni","jun"];
        const RacingNumber = "3";
        const Distance = [3,3,1]
        const expectresult = ["poni","woni"];
  
        const result = printWinner(Distance, CarName, RacingNumber);

        expect(result).toEqual(expectresult);
    });
});
