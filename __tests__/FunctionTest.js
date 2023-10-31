import carAdvanceCount from "../src/carAdvanceCount.js";
import checkAllScore from "../src/checkAllScore.js";
import allTryResult from "../src/allTryResult.js";
import getFinalScore from "../src/getFinalScore.js";

describe("함수(기능) 정상 동작 확인 테스트", () => {
    test("전진 조건 구현", () => {
        const score = "--";
        const result = carAdvanceCount(score).length;

        expect(result).toBeGreaterThanOrEqual(2);
        expect(result).toBeLessThanOrEqual(3);
    })

    test("각 시도별 자동차 점수 체크", () => {
        let a;
        let b;
        const carName = [a, b];
        const allScore = ["--", "-"];
        const result = checkAllScore(carName, allScore);

        expect(result[0].length).toBeGreaterThanOrEqual(2);
        expect(result[0].length).toBeLessThanOrEqual(3);
        expect(result[1].length).toBeGreaterThanOrEqual(1);
        expect(result[1].length).toBeLessThanOrEqual(2);
    })

    test("최종 결과 체크", () => {
        let a;
        let b;
        const carName = [a, b];
        const tryNumber = 5;
        const allScore = ["", ""];
        const result = allTryResult(carName, tryNumber, allScore);

        expect(result[0].length).toBeLessThanOrEqual(5);
        expect(result[1].length).toBeLessThanOrEqual(5);
    })

    test("최고점 점수 체크", () => {
        const allScore = ["---", "--", "----"];
        const result = getFinalScore(allScore);

        expect(result).toEqual(4);
    })
})