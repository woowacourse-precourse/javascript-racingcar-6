import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { ERROR_MESSAGE } from "../src/constants.js";

const Mockfn = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// 이름 테스트
test("이름 공백에 대한 예외처리 테스트", async () => {
  Mockfn(["baek, son "]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.SPACE_NAME);
});

test("5자 이상 이름에 대한 예외처리 테스트", async () => {
  Mockfn(["baek,sonson"]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.OVER_LENGTH_NAME);
});

test("빈 값에 대한 예외처리 테스트", async () => {
  Mockfn([""]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.EMPTY_NAME);
});

test("중복 이름에 대한 예외처리 테스트", async () => {
  Mockfn(["baek,baek"]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.DUPLICATE_NAME);
});

// 시도 횟수 테스트
test("시도 횟수가 1보다 작은 값에 대한 예외처리 테스트", async () => {
  Mockfn(["baek,son", "0"]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.INVALID_TRYCOUNT);
});

test("빈 값에 대한 예외처리 테스트", async () => {
  Mockfn(["baek,son", ""]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.EMPTY_TRYCOUNT);
});

test("숫자가 아닌 시도 횟수에 대한 예외처리 테스트", async () => {
  Mockfn(["baek,son", "hi"]);
  const app = new App();
  await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.NOT_NUMBER_TRYCOUNT);
});
