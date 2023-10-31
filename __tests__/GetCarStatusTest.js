import App from "../src/App.js";
import { mockReadLineAsync } from "../src/utils/testUtils.js";

describe("getCarStatus", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.restoreAllMocks();
  });

  test("자동차 이름을 쉼표로 구분하여 입력하면 각 이름을 키로 갖고 초기값이 0인 객체를 반환", async () => {
    const input = "Car1,Car2,Car3";
    mockReadLineAsync(input);

    const carStatus = await app.getCarStatusFromUserInput();

    expect(carStatus).toEqual({ Car1: 0, Car2: 0, Car3: 0 });
  });

  test("공백 에러", async () => {
    const input = ", , ,";
    mockReadLineAsync(input);

    await expect(app.getCarStatusFromUserInput()).rejects.toThrowError(
      "[ERROR] 자동차 이름이 비어있습니다."
    );
  });

  test("자동차 이름 5글자 초과 시 오류", async () => {
    const input = "Car12345, Car67890";
    mockReadLineAsync(input);

    await expect(app.getCarStatusFromUserInput()).rejects.toThrowError(
      "[ERROR] 자동차 이름 'Car12345'이/가 5자 초과입니다."
    );
  });

  test("중복된 자동차 이름 존재 시 오류", async () => {
    const input = "Car1, Car2, Car1";
    mockReadLineAsync(input);

    await expect(app.getCarStatusFromUserInput()).rejects.toThrowError(
      "[ERROR] 자동차 이름 'Car1'이/가 중복됩니다."
    );
  });
});
