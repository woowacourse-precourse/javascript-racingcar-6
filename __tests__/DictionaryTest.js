import App from "../src/App.js";

describe("딕셔너리 확인", () => {
  test("딕셔너리 null 확인", async () => {
    const CAR_INPUT = ["pobi,woni"];
    const app = new App();

    const CAR_DICT = await app.setCarDict(CAR_INPUT);

    expect(CAR_DICT).toBeTruthy();
  });
});