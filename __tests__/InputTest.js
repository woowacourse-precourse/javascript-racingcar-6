import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("사용자 입력 테스트", () => {
  test("입력된 자동차 이름을 컴마 기준으로 나눠 배열에 넣기", async () => {
    // given
    const inputs = ["tayo,jjayo"];
    mockQuestions(inputs);

    // when
    const app = new App();
    const carInput = await app.inputCarNames();

    // then
    expect(carInput).toEqual(["tayo", "jjayo"]);
  });
  test("입력된 자동차 이름의 양 옆 공백 제거", async () => {
    // given
    const inputs = [" tayo,jjayo "];
    mockQuestions(inputs);

    // when
    const app = new App();
    const carInput = await app.inputCarNames();

    // then
    expect(carInput).toEqual(["tayo", "jjayo"]);
  });

  test("자동차 이름이 입력되지 않았을때 에러처리", async () => {
    const inputs = [""];
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const carInput = app.inputCarNames();

    // then
    await expect(carInput).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 중복되었는지", async () => {
    const inputs = ["tayo,tayo"];
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const carInput = app.inputCarNames();

    // then
    await expect(carInput).rejects.toThrow("[ERROR]");
  });
  test("자동차 이름의 길이가 5자 이하인지", async () => {
    const inputs = ["tayobus,jjayo"];
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const carInput = app.inputCarNames();

    // then
    await expect(carInput).rejects.toThrow("[ERROR]");
  });
  test("자동차 이름의 개수가 1~9 사이인지", async () => {
    const inputs = ["tayo,jjayo,loopy,crong,eddy,poby,harry,petty,poro,rong"];
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const carInput = app.inputCarNames();

    // then
    await expect(carInput).rejects.toThrow("[ERROR]");
  });
  test("시도 횟수가 1~10 사이인지", async () => {
    const inputs = [-1, 11];
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const numberInput = app.inputTryNumbers();

    // then
    await expect(numberInput).rejects.toThrow("[ERROR]");
  });
  test("시도 횟수가 숫자인지", async () => {
    const inputs = ["five"];
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const numberInput = app.inputTryNumbers();
    // then
    await expect(numberInput).rejects.toThrow("[ERROR]");
  });
});
