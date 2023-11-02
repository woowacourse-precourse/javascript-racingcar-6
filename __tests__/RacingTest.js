import {Console} from "@woowacourse/mission-utils";
import App from "../src/App.js";

describe("레이싱 출력 테스트", () => {
    test("차수별 결과 출력", () => {
        const app = new App(); 
        const carsObj = [{ name: "qwe", moveCount: 0 }, { name: "asd", moveCount: 1 }, { name: "zxc", moveCount: 2 }];
        const results = ["qwe : ", "asd : -", "zxc : --"];
        const Spy = jest.spyOn(Console, "print");

        app.printResult(carsObj);
        
        results.forEach((result) => {
            expect(Spy).toHaveBeenCalledWith(expect.stringContaining(result));
        });
    });

    test("우승자 출력", () => {
        const app = new App(); 
        const carsObj = [{ name: "qwe", moveCount: 0 }, { name: "asd", moveCount: 2 }, { name: "zxc", moveCount: 2 }];
        const winners = "최종 우승자 : asd, zxc";
        const Spy = jest.spyOn(Console, "print");

        app.printWinner(carsObj);

        expect(Spy).toHaveBeenCalledWith(expect.stringContaining(winners));
    });
});