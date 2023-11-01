import App from "../src/App";

describe("경주게임 테스트", () => {
    test.each([
        ["apple", "banana", "cherry", "date", "elderberry"],
        ["apple", "pear", "date", "fig", "kiwi"],
        ["banana", "cherry", "elderberry", "grapefruit", "pineapple"],
        ["apple", "banana", "grape", "kiwi", "lemon"],
        ["apple", "banana", "dates", "fig", "kiwi"],
    ])("자동차 이름이 5자 이하인지 확인", async (inputs) => {
        expect(() => App.setCarName(inputs).toThrow());
    });

    test("입력값이 숫자인지 확인", async () => {
        expect(() => App.setTries("abc")).toThrow();
    });

    test("우승자가 한 명일 때", () => {
        const app = new App();
        app.winner = [0];
        app.nameList = ["Car1", "Car2", "Car3"];
        const expectedMessage = "최종 우승자 : Car1";
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {}); // Console.print를 모의화

        app.showWinner();

        expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
    });

    test("우승자가 여러 명일 때", () => {
        const app = new App();
        app.winner = [1, 2]; // 예를 들어, 두 번째와 세 번째 자동차가 우승했다고 가정
        app.nameList = ["Car1", "Car2", "Car3"]; // 자동차 이름 리스트
        const expectedMessage = "최종 우승자 : Car2, Car3";
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {}); // Console.print를 모의화

        app.showWinner();

        expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);
    });
});
