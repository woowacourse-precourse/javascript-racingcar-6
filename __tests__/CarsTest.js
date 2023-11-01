import Cars from "../src/models/Cars.js"

describe("Cars 모듈 각 함수 테스트", () => {
    test("자동차 이름 배열이 나누어 저장되는지 확인", () => {
        const input = ["pobi", "woni", "jun"];
        const result = new Cars(input);

        expect(result.carList[0].name).toEqual("pobi");
        expect(result.carList[1].name).toEqual("woni");
        expect(result.carList[2].name).toEqual("jun");
    });

    test("우승자가 정확히 출력되는지 확인", () => {
        const input = ["pobi", "woni", "jun"];
        const testArray = new Cars(input);
        testArray.carList[0].distance = 3;
        testArray.carList[1].distance = 1;
        testArray.carList[2].distance = 2;

        expect(testArray.findWinner()).toEqual(["pobi"]);
    });
});
