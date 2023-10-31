import { MESSAGE } from "../src/Data.js";
import Controller from "../src/Controller.js";

describe("Controller 테스트", () => {
    describe("setPlayer 테스트", () => {
        test("데이터를 객체로 변경", () => {
            const result = Controller.setPlayer("kim,lee,park");

            expect(result).toEqual({
                kim: 0,
                lee: 0,
                park: 0,
            });
        });

        test("공백이 섞인 단어면 에러 ", () => {
            expect(() => Controller.setPlayer("k  im,lee,par k")).toThrow(
                MESSAGE.ERROR
            );
        });

        test("숫자 있으면 에러 ", () => {
            expect(() => Controller.setPlayer("123,park,lee")).toThrow(
                MESSAGE.ERROR
            );
        });
    });

    describe("setNumber 테스트", () => {
        test("데이터를 숫자로 변경", () => {
            const result = Controller.setNumber("5");

            expect(result).toBe(5);
        });

        test("입력이 숫자가 아니면 에러", () => {
            expect(() => Controller.setNumber("a")).toThrow(MESSAGE.ERROR);
        });
    });

    describe("getRaceResultText 테스트", () => {
        test("텍스트로 경기 진행 상황 반환", () => {
            const result = Controller.getRaceResultText({
                kim: 5,
                lee: 5,
                park: 3,
            });

            expect(result).toBe("kim : -----\nlee : -----\npark : ---\n");
        });
    });

    describe("getWinnerText 테스트", () => {
        test("텍스트로 우승자(들) 반환", () => {
            const result = Controller.getWinnerText({
                kim: 5,
                lee: 5,
                park: 3,
            });

            expect(result).toBe("최종 우승자 : kim, lee");
        });
    });
});
