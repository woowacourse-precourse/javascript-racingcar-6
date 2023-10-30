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

  describe("method test : findLength()", () => {
    test("result가 -----인 객체를 인수로 준다면 result.length 배열이 [5, 1, 3]이 되는가 ? ", () => {
      const testParameter = [
        { name: "equus", result: "-----" },
        { name: "pony", result: "-" },
        { name: "ray", result: "---" },
      ];
      let testLength = app.findLength(testParameter);
      expect(testLength).toEqual([5, 1, 3]);
    });
  });
});
