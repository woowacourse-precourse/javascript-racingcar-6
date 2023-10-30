import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("class App test", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  describe("method test : makeObject()", () => {
    test("makeObject()의 인수 carName이 equus이라면 ?", () => {
      const testResult = { name: "equus", result: "" };
      let testObject = app.makeObject("equus");
      expect(testObject).toMatchObject(testResult);
    });
  });
});
