import App from "../src/App.js";

describe("함수 별 유닛 테스트", () => {
    const app = new App();
    test.each(["", ",", ",asdf", "qwer,ds,", "qwer,,d"])(
      "자동차 이름 미입력",
      async (inputs) => {
        await expect(app.checkCar(inputs)).rejects.toThrow("[ERROR] 이름이 없는 자동차가 있습니다.")
      }
    );
    test.each(["qwerty", "q,qwerty"])(
      "자동차 이름 5자 초과",
      async (inputs) => {
        await expect(app.checkCar(inputs)).rejects.toThrow("[ERROR] 이름이 6자 이상인 자동차가 있습니다.")
      }
    );
    test.each([-1,0,"","qwer"])(
      "횟수 입력값 오류",
      async (inputs) => {
        await expect(app.checkCount(inputs)).rejects.toThrow("[ERROR]")
      }
    );
    test("실행결과 확인", async () =>{
        await expect(app.printExecResult(["q"], [0])).toBe("q : ")
        
    })
  });
  