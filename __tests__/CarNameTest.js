import App from "../src/App.js";
import ERROR_MESSAGE from "../src/constant/errorMessage.js";
import allCars from "../src/model/allCars.js";
import messagePrinter from "../src/utils/messagePrinter.js";

describe('차 이름 유효성 테스트', () => {
  test('정상 값 입력 시 통과', () => {
    const input = ['pobi', 'woni', 'jun'];

    expect(() => {
      const cars = new allCars(input);
      cars.validate();
    }).not.toThrow();
  });

  test('중복된 차 이름이 있을 경우 에러 반환', () => {
    const input = ['pobi', 'pobi', 'woni', 'jun'];

    expect(() => {
      const cars = new allCars(input);
      cars.validate();
    }).toThrow(ERROR_MESSAGE.duplicated_car_names);
  });

  test('차 이름이 5자 초과일 경우 에러 반환', () => {
    const input = ['pobi123', 'woni', 'jun'];

    expect(() => {
      const cars = new allCars(input);
      cars.validate();
    }).toThrow(ERROR_MESSAGE.more_than_five_letters);
  });

  test('차 이름이 없을 경우 에러 반환', () => {
    const input = ['', 'woni', 'jun'];

    expect(() => {
      const cars = new allCars(input);
      cars.validate();
    }).toThrow(ERROR_MESSAGE.no_letters);
  });
});
